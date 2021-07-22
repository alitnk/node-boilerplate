import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileCreateInput } from "../../../inputs/ProfileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileCreateInput, {
    nullable: false
  })
  data!: ProfileCreateInput;
}
