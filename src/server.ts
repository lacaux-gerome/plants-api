const express = require("express");
import { createContext } from "./context";
import { schema } from "./schema";
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

const context = ({ req, res }) => ({ req, res });

const server = new ApolloServer({
  schema,
  context: (a: any) => ({ ...createContext(), ...context(a) }),
  cors: false,
});
server.applyMiddleware({ app, cors: false });
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () =>
  console.log(
    `🔥🔥🔥 GraphQL + Express auth tutorial listening on port http://localhost:4000/`
  )
);
