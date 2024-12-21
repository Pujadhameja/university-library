"use server";

import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export async function signUp(params: AuthCredentails) {
  const { fullname, email, universityId, password, universityCard } = params;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullname,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
    });

    return { success: true };
  } catch (error) {
    console.error("Error in signup:", error);
    return { success: false, error: "An error occurred during sign up" };
  }
}

export async function signInWithCredentials(
  params: Pick<AuthCredentails, "email" | "password">
) {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: "Invalid email or password" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in signin:", error);
    return { success: false, error: "An error occurred during sign in" };
  }
}
