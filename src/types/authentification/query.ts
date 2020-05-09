import { stringArg, queryField } from "nexus";
import { UserInputError } from "apollo-server";
import { UserCreateInput } from "@prisma/client";

import { ENCRYPTION_KEY_JWT } from ".";
import { RoleError } from "../../errors/custom-errors";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export const LoginAdminUser = queryField("loginAdminUser", {
  type: "AuthResp",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (_, args: { email: string; password: string }, ctx) => {
    const { prisma } = ctx;
    const { email, password } = args;
    const user = await prisma.user.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new UserInputError("Form Arguments invalid", {
        extraInfo: ["EMAIL_FIELD"],
      });
    }
    if (user.role !== "ADMIN") {
      throw RoleError("You are not admin");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UserInputError("Form Arguments invalid", {
        extraInfo: ["PASSWORD_FIELD"],
      });
    }
    const token = jwt.sign(
      { email: user.email, userId: user.id },
      ENCRYPTION_KEY_JWT,
      { expiresIn: "7d" }
    );
    ctx.res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days (a week)
    });
    return { success: true, user };
  },
});

export const SignupUser = queryField("signupUser", {
  type: "AuthResp",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    firstName: stringArg(),
  },
  resolve: async (_, args: UserCreateInput, { prisma }) => {
    const { email, password } = args;
    try {
      const newUser = prisma.user.create({
        data: {
          email,
          password: bcrypt.hashSync(password, 10),
        },
      });
      return { success: true, user: newUser };
    } catch (error) {
      throw error;
    }
  },
});
