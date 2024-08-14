"use server";

import prisma from "../db";
import { MetadataType } from "./MetadataType";

function getUpdateArgs(formData: FormData, metadataType: MetadataType) {
  return {
    where: {
      key: metadataType,
    },
    data: { value: formData.get(metadataType) as string },
  };
}

export async function updateMetadata(formData: FormData) {
  await prisma.metadata.update(getUpdateArgs(formData, MetadataType.FirstName));
  await prisma.metadata.update(getUpdateArgs(formData, MetadataType.LastName));
  await prisma.metadata.update(getUpdateArgs(formData, MetadataType.Email));
}
