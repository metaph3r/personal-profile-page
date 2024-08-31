import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Be at least 1 character long" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Be at least 1 character long" })
    .trim(),
});

export type LoginFormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export type VerifiedSession = {
  userId: Object;
  isAuth: boolean;
};

export enum ProfileDataType {
  FirstName = "FIRST_NAME",
  LastName = "LAST_NAME",
  Email = "EMAIL",
  Role = "ROLE",
  Location = "LOCATION",
  Phone = "PHONE",
}
