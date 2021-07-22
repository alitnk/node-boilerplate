import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;
}
