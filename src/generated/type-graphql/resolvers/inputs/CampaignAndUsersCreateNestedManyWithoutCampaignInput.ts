import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyCampaignInputEnvelope } from "../inputs/CampaignAndUsersCreateManyCampaignInputEnvelope";
import { CampaignAndUsersCreateOrConnectWithoutCampaignInput } from "../inputs/CampaignAndUsersCreateOrConnectWithoutCampaignInput";
import { CampaignAndUsersCreateWithoutCampaignInput } from "../inputs/CampaignAndUsersCreateWithoutCampaignInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateNestedManyWithoutCampaignInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateWithoutCampaignInput], {
    nullable: true
  })
  create?: CampaignAndUsersCreateWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateOrConnectWithoutCampaignInput], {
    nullable: true
  })
  connectOrCreate?: CampaignAndUsersCreateOrConnectWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateManyCampaignInputEnvelope, {
    nullable: true
  })
  createMany?: CampaignAndUsersCreateManyCampaignInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CampaignAndUsersWhereUniqueInput[] | undefined;
}
