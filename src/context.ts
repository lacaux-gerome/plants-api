import { PrismaClient } from "@prisma/client";
import express = require("express");

const prisma = new PrismaClient();

interface ContextPrisma {
  prisma: PrismaClient;
}

type ExpressContext = {
  req: express.Request;
  res: express.Response;
};
export const contextExpress = ({ req, res }: ExpressContext) => ({ req, res });
export const createContext = (): ContextPrisma => ({
  prisma,
});

export type Context = ExpressContext & ContextPrisma;
