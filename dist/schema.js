"use strict";
exports.__esModule = true;
var nexus_prisma_1 = require("nexus-prisma");
var nexus_1 = require("nexus");
var User = nexus_1.objectType({
    name: "User",
    definition: function (t) {
        t.model.id();
        t.model.createdAt();
        t.model.email();
        t.model.password();
        t.model.firstName();
        t.model.lastName();
        t.model.plantBoxes({ pagination: true });
    }
});
var PlantBox = nexus_1.objectType({
    name: "PlantBox",
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.image();
        t.model.plants();
        t.model.user();
        t.model.userId();
    }
});
var Plant = nexus_1.objectType({
    name: "Plant",
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.sprayFrequency();
        t.model.sunExposure();
        t.model.image();
        t.model.soilTypes();
        t.model.box();
    }
});
var Query = nexus_1.objectType({
    name: "Query",
    definition: function (t) {
        t.crud.plants();
    }
});
var Mutation = nexus_1.objectType({
    name: "Mutation",
    definition: function (t) {
        t.crud.createOneUser();
    }
});
exports.schema = nexus_1.makeSchema({
    types: [Query, Mutation, User, Plant, PlantBox],
    plugins: [nexus_prisma_1.nexusPrismaPlugin()],
    outputs: {
        schema: __dirname + "/../schema.graphql",
        typegen: __dirname + "/generated/nexus.ts"
    },
    typegenAutoConfig: {
        contextType: "Context.Context",
        sources: [
            {
                source: "@prisma/client",
                alias: "prisma"
            },
            {
                source: require.resolve("./context"),
                alias: "Context"
            },
        ]
    }
});
