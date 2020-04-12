"use strict";
exports.__esModule = true;
var nexus_prisma_1 = require("nexus-prisma");
var nexus_1 = require("nexus");
var User = nexus_1.objectType({
    name: "User",
    definition: function (t) {
        t.model.id();
        t.model.email();
        t.model.password();
        t.model.firstName();
        t.list.field("plantBox", {
            type: "PlantBox",
            resolve: function (post, args, ctx) {
                return ctx.prisma.plantBox.findMany({ first: 10 });
            }
        });
    }
});
var PlantBox = nexus_1.objectType({
    name: "PlantBox",
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.image();
        t.list.field("plant", {
            type: "Plant",
            resolve: function (post, args, ctx) {
                return ctx.prisma.plant.findMany();
            }
        });
    }
});
var Plant = nexus_1.objectType({
    name: "Plant",
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.sprayFrequency();
        t.model.image();
    }
});
exports.schema = nexus_1.makeSchema({
    types: [User, Plant, PlantBox],
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
//# sourceMappingURL=schema.js.map