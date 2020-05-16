import { objectType } from "@nexus/schema";

export const AuthResp = objectType({
  name: "AuthResp",
  definition(t) {
    t.boolean("success");
    t.field("user", {
      type: "User",
    });
  },
});
