import { AuthResp } from "./schema";
import { LoginAdminUser } from "./query";

export const ENCRYPTION_KEY_JWT = "secret_key_of_doom!";

export const UserAuthentificationModel = [LoginAdminUser, AuthResp];
