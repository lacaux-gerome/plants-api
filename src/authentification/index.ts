import { User, AuthResp } from "./schema";
import { SignupUser, LoginUser } from "./query";

export const ENCRYPTION_KEY_JWT = "secret_key_of_doom!";

export const UserAuthentification = [User, SignupUser, LoginUser, AuthResp];
