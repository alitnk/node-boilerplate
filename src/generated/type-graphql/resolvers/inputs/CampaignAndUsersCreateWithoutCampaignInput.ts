import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreatepermissionsInput } from "../inputs/CampaignAndUsersCreatepermissionsInput";
import { UserCreateNestedOneWithoutCampaignsInput } from "../inputs/UserCreateNestedOneWithoutCampaignsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateWithoutCampaignInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersCreatepermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersCreatepermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCampaignsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCampaignsInput;
}
