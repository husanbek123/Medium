import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const registered = request.cookies.get('registered')
  if (request.nextUrl.pathname === "/register") {
    if (registered) {
      return NextResponse.rewrite(new URL("/register", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
