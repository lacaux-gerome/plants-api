import { GraphQLModule } from "@graphql-modules/core";
import { loadResolversFiles, loadSchemaFiles } from "graphql-toolkit";

export const MyFirstModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + "/schema/"),
  resolvers: loadResolversFiles(__dirname + "/resolvers/"),
});
