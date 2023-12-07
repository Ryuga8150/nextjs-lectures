import { NextResponse } from "next/server";

export async function GET() {
  // return new Response("Hello, Next.js");

  return NextResponse.json({ message: "Hello, Next.js" });
}
