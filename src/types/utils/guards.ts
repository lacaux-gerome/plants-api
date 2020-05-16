import { UserRole } from "@prisma/client";

export const isRole = (role: any): role is UserRole =>
  role === "ADMIN" || role === "USER";
