import { queryField, arg, objectType } from "@nexus/schema";

import { BadRequest } from "../../errors/custom-errors";
import { isRole } from "../utils/guards";
import { requiredInt } from "../utils/utils-args";
import { PaginatedUsers } from "./schema";

type PaginationInput = {
  first: number;
  skip: number;
};

const determinePagination = (
  offset: number,
  limit: number
): PaginationInput => {
  const skip = offset * limit;
  return {
    first: limit,
    skip,
  };
};

export const getPaginatedUsers = queryField("paginatedUsers", {
  type: PaginatedUsers,
  args: {
    role: arg({ type: "UserRole" }),
    offset: requiredInt({}),
    limit: requiredInt({}),
  },
  resolve: async (_, args, ctx) => {
    const { role, offset, limit } = args;
    const { prisma } = ctx;
    if (role && !isRole(role)) {
      throw BadRequest("wrong parameter 'role'. Role wrong value");
    }
    const users = await prisma.user.findMany({
      where: { role: role },
      ...determinePagination(offset, limit),
    });
    const length = await prisma.user.count();
    return { users, length };
  },
});
