const express = require("express");
import { createContext } from "./context";
import { schema } from "./schema";
import { ENCRYPTION_KEY_JWT } from "./authentification";
const { ApolloServer, AuthenticationError } = require("apollo-server-express");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

const context = ({ req, res }) => {
  const token = req.cookies["jwt"] || "";
  try {
    const { id, email } = jwt.verify(token, ENCRYPTION_KEY_JWT);
    return { req, res, id, email };
  } catch (e) {
    throw new AuthenticationError(
      "Authentication token is invalid, please log in"
    );
  }
};

const server = new ApolloServer({
  schema,
  context: { ...createContext, ...context },
  cors: false,
});
server.applyMiddleware({ app, cors: false });
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () =>
  console.log(
    `🔥🔥🔥 GraphQL + Express auth tutorial listening on port http://localhost:4000/`
  )
);

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body
//   const user = users.find(user => user.email === email)

//   if (!user) {
//     res.status(404).send({
//       success: false,
//       message: `Could not find account: ${email}`,
//     })
//     return
//   }

//   const match = await bcrypt.compare(password, user.password)
//   if (!match) {
//     res.status(401).send({
//       success: false,
//       message: 'Incorrect credentials',
//     })
//     return
//   }

//   const token = jwt.sign(
//     { email: user.email, id: user.id },
//     SECRET_KEY,
//   )

//   res.cookie('jwt', token, {
//     httpOnly: true
//     //secure: true, //on HTTPS
//     //domain: 'example.com', //set your domain
//   })

//   res.send({
//     success: true
//   })
// })
