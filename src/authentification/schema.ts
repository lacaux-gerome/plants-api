import { objectType, unionType } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id"),
      t.model.email(),
      t.model.firstName(),
      t.model.lastName(),
      t.model.password();
  },
});

export const Auth = objectType({
  name: "Auth",
  definition(t) {
    t.string("token");
  },
});

export const SignupUserResp = unionType({
  name: "SignupUserResp",
  description: "Any container type that can be rendered into the feed",
  definition(t) {
    t.members("User", "Auth");
  },
});
