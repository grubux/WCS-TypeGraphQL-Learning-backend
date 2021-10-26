import "reflect-metadata";
import { buildSchema, emitSchemaDefinitionFile } from "type-graphql";
import WilderResolver from "./WilderResolver";

buildSchema({
  resolvers: [WilderResolver],
  emitSchemaFile: true,
});
