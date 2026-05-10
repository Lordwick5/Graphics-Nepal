import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { error } from "console";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  //Validate - make sure all fields are filled
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  //Save to Supabase
  const { error } = await supabase.from("contacts").insert([{ name, email, message }]);

  if (error) {
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }

  return NextResponse.json(
    { success: true, message: "Message sent successfully!" },
    { status: 200 },
  );
}
