import { User } from "@prisma/client";
import { ModuleContext } from "@graphql-modules/core";

export default {
  Query: {
    user: (root, { id }, ctx: ModuleContext) => {
      console.log("ctx", ctx.injector.getSessionInjector("prisma"));
      return {
        _id: id,
        username: "jhon",
      };
    },
  },
  User: {
    id: (obj, args, context, info) => {
      return obj.id || "";
    },
  },
};
