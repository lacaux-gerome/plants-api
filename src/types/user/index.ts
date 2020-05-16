import { User } from "./schema";
import { getPaginatedUsers } from "./query";

export const UserModel = [User, getPaginatedUsers];
