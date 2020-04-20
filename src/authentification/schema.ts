import { objectType, unionType, enumType } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id"), t.model.email(), t.model.firstName(), t.model.lastName();
  },
});

export const AuthResp = objectType({
  name: "AuthResp",
  definition(t) {
    t.boolean("success");
    t.field("user", {
      type: "User",
    });
  },
});
