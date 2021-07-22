import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileCreateManyInput } from "../../../inputs/ProfileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProfileArgs {
  @TypeGraphQL.Field(_type => [ProfileCreateManyInput], {
    nullable: false
  })
  data!: ProfileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
