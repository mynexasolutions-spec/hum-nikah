import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.AUTH_SECRET || "humnikah_secure_jwt_secret_2026_key_32_bytes";
const key = new TextEncoder().encode(JWT_SECRET);

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all /admin routes
  if (path.startsWith("/admin")) {
    const isLoginPage = path === "/admin/login";
    const sessionCookie = request.cookies.get("admin_session")?.value;

    let isAuthenticated = false;

    if (sessionCookie) {
      try {
        await jwtVerify(sessionCookie, key, {
          algorithms: ["HS256"],
        });
        isAuthenticated = true;
      } catch (error) {
        isAuthenticated = false;
      }
    }

    // Unauthenticated user trying to access protected admin page -> redirect to login
    if (!isAuthenticated && !isLoginPage) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Authenticated user trying to access login page -> redirect to admin dashboard
    if (isAuthenticated && isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
