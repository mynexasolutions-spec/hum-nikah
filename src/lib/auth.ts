import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const JWT_SECRET = process.env.AUTH_SECRET || "development_auth_secret_placeholder_replace_in_env";

const key = new TextEncoder().encode(JWT_SECRET);

export async function createSession(adminId: string, email: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours session
  const session = await new SignJWT({ adminId, email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
    
  const cookieStore = await cookies();
  cookieStore.set("admin_session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function verifySession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session")?.value;
  
  if (!sessionCookie) return null;
  
  try {
    const { payload } = await jwtVerify(sessionCookie, key, {
      algorithms: ["HS256"],
    });
    return payload as { adminId: string; email?: string; role?: string };
  } catch (error) {
    return null;
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}
