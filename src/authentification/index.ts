import { objectType, mutationField, stringArg } from "nexus";

const Signup = mutationField("signup", {
  type: "User",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: (_, { email, password }, ctx) => {
    return ctx.prisma.user.create({
      data: {
        password,
        email,
      },
    });
  },
});

export const UserAuthentification = [Signup];
