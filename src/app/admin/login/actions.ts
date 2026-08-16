"use server";

import { compare } from "bcryptjs";
import { createSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function login(formData: FormData) {
  const email = (formData.get("email") as string)?.trim()?.toLowerCase();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // Environmental admin credentials (only if explicitly set in env)
  const envAdminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const envAdminPassword = process.env.ADMIN_PASSWORD;

  if (envAdminEmail && envAdminPassword && email === envAdminEmail && password === envAdminPassword) {
    await createSession("env-admin-id", envAdminEmail);
    return { success: true };
  }

  // Check Database if Supabase is configured
  try {
    const { data: admin, error } = await supabase
      .from("Admin")
      .select("*")
      .eq("email", email)
      .single();

    if (!error && admin && admin.passwordHash) {
      const isValidPassword = await compare(password, admin.passwordHash);
      if (isValidPassword) {
        await createSession(admin.id, admin.email);
        return { success: true };
      }
    }
  } catch (err) {
    console.error("Database authentication error:", err);
  }

  // Unified error response to prevent user enumeration
  return { error: "Invalid email or password" };
}
