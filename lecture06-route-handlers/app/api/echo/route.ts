import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  // console.log(url);
  const { searchParams } = url;
  // console.log(searchParams);

  // for specifc params sent
  // const instrument = searchParams.get("instrument");
  // const name = searchParams.get("name");

  // return Response.json({ name, instrument });

  const obj = Object.fromEntries(searchParams.entries());
  // for any params sent
  return Response.json(obj);
}
