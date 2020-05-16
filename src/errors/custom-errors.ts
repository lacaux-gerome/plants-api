import { ApolloError } from "apollo-server";

export const RoleError = (
  message: string,
  additionalProperties?: Record<string, any>
) => new ApolloError(message, "403", additionalProperties);

export const BadRequest = (
  message: string,
  additionalProperties?: Record<string, any>
) => new ApolloError(message, "400", additionalProperties);
