import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema, objectType } from "nexus";
import { UserAuthentification } from "./authentification";

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

// const Plant = objectType({
//   name: "Plant",
//   definition(t) {
//     t.id("id");
//     t.model.name();
//     t.model.description();
//     t.model.sprayFrequency();
//     t.model.sunExposure();
//     t.model.image();
//     t.model.soilTypes();
//     t.model.plantBox();
//   },
// });

export const schema = makeSchema({
  types: [...UserAuthentification],
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
