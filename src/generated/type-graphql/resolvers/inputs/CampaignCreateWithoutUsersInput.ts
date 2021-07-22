import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCampaignInput } from "../inputs/UserCreateNestedOneWithoutCampaignInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCampaignInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCampaignInput;
}
