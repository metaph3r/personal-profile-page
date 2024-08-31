"use server";

import { redirect } from "next/navigation";
import prisma from "../lib/db";

export async function createOrUpdateBio(formData: FormData): Promise<void> {
  const bio = await prisma.content.findFirst({
    where: {
      type: "BIO",
    },
  });
  const text = formData.get("text")?.toString();

  if (bio) {
    await prisma.content.update({
      data: {
        text: text,
      },
      where: {
        id: bio.id,
      },
    });
  } else {
    await prisma.content.create({
      data: {
        text: text ? text : "",
        type: "BIO",
      },
    });
  }

  redirect("/");
}
