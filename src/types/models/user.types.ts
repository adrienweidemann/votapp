export type UserRole = "user" | "admin";

export interface AuthenticatedUser {
  id: number;
  name: string;
  role: UserRole;
}
