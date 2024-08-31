"use server";

import { LoginFormSchema, LoginFormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString();

  if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
    return <LoginFormState>{
      message: "Username or password is incorrect",
    };
  }

  await createSession(username);
  redirect("/");
}

export async function logout() {
  deleteSession();
  redirect("/");
}
