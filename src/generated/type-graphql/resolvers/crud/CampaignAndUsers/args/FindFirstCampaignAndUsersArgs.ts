import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersOrderByInput } from "../../../inputs/CampaignAndUsersOrderByInput";
import { CampaignAndUsersWhereInput } from "../../../inputs/CampaignAndUsersWhereInput";
import { CampaignAndUsersWhereUniqueInput } from "../../../inputs/CampaignAndUsersWhereUniqueInput";
import { CampaignAndUsersScalarFieldEnum } from "../../../../enums/CampaignAndUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  where?: CampaignAndUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersOrderByInput], {
    nullable: true
  })
  orderBy?: CampaignAndUsersOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: CampaignAndUsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "campaignId" | "permissions"> | undefined;
}
