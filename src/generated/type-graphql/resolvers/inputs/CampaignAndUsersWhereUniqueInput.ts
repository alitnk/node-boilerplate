import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCampaignIdUserIdCompoundUniqueInput } from "../inputs/CampaignAndUsersCampaignIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersWhereUniqueInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersCampaignIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  campaignId_userId?: CampaignAndUsersCampaignIdUserIdCompoundUniqueInput | undefined;
}
