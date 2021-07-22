import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { generateSchema } from "./schema";

// vvv Uses the v2 apollo playground
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

async function main() {
  // Prisma
  const prisma = new PrismaClient();

  const context = { prisma };

  // Express / Apollo
  const server = new ApolloServer({
    schema: await generateSchema(), // Typegraphql
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });
  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  // Run Server
  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
}

main().catch(console.log);
