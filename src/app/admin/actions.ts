"use server";

import { logout as authLogout } from "@/lib/auth";

export async function logout() {
  await authLogout();
}
