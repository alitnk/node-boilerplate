import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateWithoutCampaignInput } from "../inputs/CampaignAndUsersCreateWithoutCampaignInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateOrConnectWithoutCampaignInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignAndUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateWithoutCampaignInput, {
    nullable: false
  })
  create!: CampaignAndUsersCreateWithoutCampaignInput;
}
