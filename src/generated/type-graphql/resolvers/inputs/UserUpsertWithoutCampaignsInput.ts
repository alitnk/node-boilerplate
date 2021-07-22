import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCampaignsInput } from "../inputs/UserCreateWithoutCampaignsInput";
import { UserUpdateWithoutCampaignsInput } from "../inputs/UserUpdateWithoutCampaignsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCampaignsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCampaignsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCampaignsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCampaignsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCampaignsInput;
}
