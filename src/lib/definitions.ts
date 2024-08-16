export type FormState =
  | {
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
