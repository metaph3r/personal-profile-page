"use server";

import { FormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(state: FormState, formData: FormData) {
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString();

  if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
    return <FormState>{
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
