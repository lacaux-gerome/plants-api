import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema, objectType, stringArg, intArg } from "nexus";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.firstName();
    t.list.field("plantBox", {
      type: "PlantBox",
      resolve(post, args, ctx) {
        return ctx.prisma.plantBox.findMany({ first: 10 });
      },
    });
  },
});

const PlantBox = objectType({
  name: "PlantBox",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.list.field("plant", {
      type: "Plant",
      resolve(post, args, ctx) {
        return ctx.prisma.plantBox.findMany();
      },
    });
  },
});

const Plant = objectType({
  name: "Plant",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.sprayFrequency();
    t.model.image();
  },
});

export const schema = makeSchema({
  types: [User, Plant, PlantBox],
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
