import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema } from "nexus";

// MODELS
import { UserAuthentificationModel } from "./types/authentification";
import { PlantModel } from "./types/plant";

export const schema = makeSchema({
  types: [...UserAuthentificationModel, ...PlantModel],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
