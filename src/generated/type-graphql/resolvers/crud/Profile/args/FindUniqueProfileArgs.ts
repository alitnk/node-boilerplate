import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;
}
