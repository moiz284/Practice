import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Here you could add validation, send email, store in DB, etc.
  return NextResponse.json({ success: true, message: "Message received!", data });
} 