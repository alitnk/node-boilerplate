import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdatepermissionsInput } from "../inputs/CampaignAndUsersUpdatepermissionsInput";
import { CampaignUpdateOneRequiredWithoutUsersInput } from "../inputs/CampaignUpdateOneRequiredWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersUpdatepermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersUpdatepermissionsInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  campaign?: CampaignUpdateOneRequiredWithoutUsersInput | undefined;
}
