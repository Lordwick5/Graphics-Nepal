import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validate - make sure all fields are filled
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Save to Supabase
  const { error: dbError } = await supabase.from("contacts").insert([{ name, email, message }]);

  if (dbError) {
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  // Send email notification
  const { error: emailError } = await resend.emails.send({
    from: "Graphics Nepal <onboarding@resend.dev>",
    to: "Graphics4kprint@gmail.com",
    subject: `New message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (emailError) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json(
    { success: true, message: "Message sent successfully!" },
    { status: 200 },
  );
}
