import { buildSchema } from "type-graphql";
import {
  CreateUserResolver,
  FindManyUserResolver,
  UserRelationsResolver,
} from "./generated/type-graphql";

export const generateSchema = () =>
  buildSchema({
    resolvers: [
      CreateUserResolver,
      FindManyUserResolver,
      UserRelationsResolver,
    ],
    validate: false,
  });
