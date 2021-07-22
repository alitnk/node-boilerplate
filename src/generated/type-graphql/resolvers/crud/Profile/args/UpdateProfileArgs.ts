import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileUpdateInput } from "../../../inputs/ProfileUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUpdateInput, {
    nullable: false
  })
  data!: ProfileUpdateInput;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;
}
