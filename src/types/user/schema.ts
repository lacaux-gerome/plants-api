import { objectType } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.firstName();
    t.model.lastName();
    t.model.role();
    t.model.createdAt();
  },
});

export const PaginatedUsers = objectType({
  name: "PaginatedUsers",
  definition(t) {
    t.field("length", { type: "Int" });
    t.field("users", { type: "User", list: true });
  },
});
