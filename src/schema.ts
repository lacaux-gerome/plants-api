import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema } from "nexus";

// MODELS
import { UserAuthentificationModel } from "./authentification";
import { PlantModel } from "./plant";

// const PlantBox = objectType({
//   name: "PlantBox",
//   definition(t) {
//     t.model.id();
//     t.model.name();
//     t.model.description();
//     t.model.image();
//     t.model.plants();
//   },
// });

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
