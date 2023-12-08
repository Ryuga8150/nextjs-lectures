import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://ypursite.com"]
    : ["http://localhost:3000", "http://www.google.com"];

export function middleware(request: Request) {
  // // another way
  // if (request.url.includes("/api/*")) {
  //   // wrap all below contents in this
  // }

  // const regex = new RegExp("/api/*");

  // if (regex.test(request.url)) {
  // }

  const origin = request.headers.get("origin");
  console.log(origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  console.log("Middleware");
  // console.log(request);
  console.log(request.method);
  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  match: "/api/:path*",
};
