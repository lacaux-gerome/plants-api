import { stringArg, queryField } from "nexus";
import { UserCreateArgs, UserCreateInput } from "@prisma/client";
import { AuthenticationError, UserInputError } from "apollo-server";
import { ENCRYPTION_KEY_JWT } from ".";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const SignupUser = queryField("signupUser", {
  type: "SignupUserResp",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    firstName: stringArg(),
  },
  resolve: async (root, args: UserCreateInput, { prisma }) => {
    const { email, password } = args;
    try {
      const newUser = prisma.user.create({
        data: {
          email,
          password: bcrypt.hashSync(password, 10),
        },
      });
      return { token: jwt.sign(newUser, "supersecret") };
    } catch (error) {
      throw error;
    }
  },
});

export const LoginUser = queryField("loginUser", {
  type: "User",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (root, args: UserCreateArgs, ctx) => {
    const { prisma } = ctx;
    const {
      data: { email, password },
    } = args;
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
      { email: user.email, id: user.id },
      ENCRYPTION_KEY_JWT
    );
    return { token };
  },
});
