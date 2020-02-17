import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });
