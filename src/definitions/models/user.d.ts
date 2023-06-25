import { USER } from "@configs/models";

export type UserRole = (typeof USER.ROLE)[keyof typeof USER.ROLE];

export interface AuthenticatedUser {
  id: number;
  name: string;
  token: string;
  role: UserRole;
}
