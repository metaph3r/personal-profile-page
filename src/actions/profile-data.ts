"use server";

import { ProfileData } from "@prisma/client";
import prisma from "@/lib/db";
import { ProfileDataType } from "@/lib/definitions";

function getUpdateArgs(formData: FormData, metadataType: ProfileDataType) {
  return {
    where: {
      key: metadataType,
    },
    data: { value: formData.get(metadataType) as string },
  };
}

export async function updateProfileData(formData: FormData) {
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

export async function getByKey(
  key: ProfileDataType
): Promise<ProfileData | null> {
  return await prisma.profileData.findFirst({ where: { key } });
}
