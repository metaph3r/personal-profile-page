import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

const protectedRoutes = ["/admin"];

export default async function middleware(req: NextRequest) {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (protectedRoutes.includes(req.nextUrl.pathname) && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
