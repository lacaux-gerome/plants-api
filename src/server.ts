import "graphql-import-node";
import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { AppModule } from "./modules";
new ApolloServer({
  schema: AppModule.schema,
  context: createContext,
}).listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at: http://localhost:4000`)
);
