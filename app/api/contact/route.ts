import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const file = formData.get("file") as File | null;

  console.log("File received:", file);
  console.log("File name:", file?.name);
  console.log("File size:", file?.size);
  console.log("File type:", file?.type);
  // Validate
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Save to Supabase
  const { error: dbError } = await supabase.from("contacts").insert([{ name, email, message }]);

  if (dbError) {
    console.log("Supabase error:", dbError);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  // Prepare attachments if file exists
  const attachments = [];
  if (file && file.size > 0) {
    const fileBuffer = await file.arrayBuffer();
    attachments.push({
      filename: file.name,
      content: Buffer.from(fileBuffer),
    });
  }

  // Send email
  const { error: emailError } = await resend.emails.send({
    from: "Graphics Nepal <noreply@graphicsnepal.com.np>",
    to: ["Graphics4kprint@gmail.com", "graphics.nepal2018@gmail.com"],
    subject: `New message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email/Phone:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${file && file.size > 0 ? `<p><strong>Attachment:</strong> ${file.name}</p>` : ""}
    `,
    attachments: attachments,
  });

  if (emailError) {
    console.log("Resend error:", emailError);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json(
    { success: true, message: "Message sent successfully!" },
    { status: 200 },
  );
}
