import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import WilderResolver from "./WilderResolver";

const start = async () => {
  const schema = await buildSchema({
    resolvers: [WilderResolver],
  });

  const server = new ApolloServer({ schema: schema });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
};

start();
