import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCampaignInput } from "../inputs/UserCreateWithoutCampaignInput";
import { UserUpdateWithoutCampaignInput } from "../inputs/UserUpdateWithoutCampaignInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCampaignInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCampaignInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCampaignInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCampaignInput, {
    nullable: false
  })
  create!: UserCreateWithoutCampaignInput;
}
