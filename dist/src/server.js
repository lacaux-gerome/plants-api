"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var context_1 = require("./context");
new apollo_server_1.ApolloServer({ schema: schema_1.schema, context: context_1.createContext }).listen({ port: 4000 }, function () {
    return console.log("\uD83D\uDE80 Server ready at: http://localhost:4000\n\u2B50\uFE0F See sample queries: http://pris.ly/e/ts/graphql-apollo-server#3-using-the-graphql-api");
});
//# sourceMappingURL=server.js.map