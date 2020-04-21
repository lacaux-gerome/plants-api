import { stringArg, queryField } from "nexus";
import { UserCreateInput } from "@prisma/client";
import { AuthenticationError, UserInputError } from "apollo-server";
import { ENCRYPTION_KEY_JWT } from ".";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

export const LoginUser = queryField("loginUser", {
  type: "AuthResp",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (root, args: { email: string; password: string }, ctx) => {
    const { prisma } = ctx;
    const { email, password } = args;
    const user = await prisma.user.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new AuthenticationError("must authenticate");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UserInputError("Form Arguments invalid", {
        invalidArgs: ["PASSWORD_FIELD"],
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
