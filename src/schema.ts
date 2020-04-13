import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema, objectType, mutationField } from "nexus";
import { UserAuthentification } from "./authentification";

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.model.email();
    t.model.password();
    t.model.firstName();
    t.model.lastName();
    t.model.createdAt();
  },
});

const PlantBox = objectType({
  name: "PlantBox",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.model.plants();
  },
});

const Plant = objectType({
  name: "Plant",
  definition(t) {
    t.id("id");
    t.model.name();
    t.model.description();
    t.model.sprayFrequency();
    t.model.sunExposure();
    t.model.image();
    t.model.soilTypes();
    t.model.plantBox();
  },
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.plants();
  },
});

export const schema = makeSchema({
  types: [Query, Plant, User, PlantBox, ...UserAuthentification],
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
