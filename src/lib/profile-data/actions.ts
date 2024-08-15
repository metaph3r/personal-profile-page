"use server";

import prisma from "../db";
import { ProfileDataType } from "./ProfileDataType";

function getUpdateArgs(formData: FormData, metadataType: ProfileDataType) {
  return {
    where: {
      key: metadataType,
    },
    data: { value: formData.get(metadataType) as string },
  };
}

export async function updateMetadata(formData: FormData) {
  await prisma.profileData.update(
    getUpdateArgs(formData, ProfileDataType.FirstName)
  );
  await prisma.profileData.update(
    getUpdateArgs(formData, ProfileDataType.LastName)
  );
  await prisma.profileData.update(
    getUpdateArgs(formData, ProfileDataType.Email)
  );
}
