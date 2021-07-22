import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdatepermissionsInput } from "../inputs/CampaignAndUsersUpdatepermissionsInput";
import { UserUpdateOneRequiredWithoutCampaignsInput } from "../inputs/UserUpdateOneRequiredWithoutCampaignsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateWithoutCampaignInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersUpdatepermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersUpdatepermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCampaignsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCampaignsInput | undefined;
}
