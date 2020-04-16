import { GraphQLModule } from "@graphql-modules/core";
import { MyFirstModule } from "./my-first-modules";

export const AppModule = new GraphQLModule({
  imports: [MyFirstModule],
}) as any;
