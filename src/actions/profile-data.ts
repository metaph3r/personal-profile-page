"use server";

import { ProfileData } from "@/entity/ProfileData";
import { AppDataSource } from "@/lib/data-source";
import { ProfileDataType } from "@/lib/definitions";

function getUpdateArgs(formData: FormData, metadataType: ProfileDataType) {
  return {
    key: metadataType,
    value: formData.get(metadataType) as string,
  };
}

export async function updateProfileData(formData: FormData) {
  await AppDataSource.getRepository(ProfileData).upsert(
    [
      getUpdateArgs(formData, ProfileDataType.FirstName),
      getUpdateArgs(formData, ProfileDataType.LastName),
      getUpdateArgs(formData, ProfileDataType.Email),
    ],
    ["key"]
  );
}

export async function getByKey(
  key: ProfileDataType
): Promise<ProfileData | null> {
  return await AppDataSource.getRepository(ProfileData).findOne({
    where: { key },
  });
}
