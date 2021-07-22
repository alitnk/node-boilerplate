import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersOrderByInput } from "../../../inputs/CampaignAndUsersOrderByInput";
import { CampaignAndUsersScalarWhereWithAggregatesInput } from "../../../inputs/CampaignAndUsersScalarWhereWithAggregatesInput";
import { CampaignAndUsersWhereInput } from "../../../inputs/CampaignAndUsersWhereInput";
import { CampaignAndUsersScalarFieldEnum } from "../../../../enums/CampaignAndUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  where?: CampaignAndUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersOrderByInput], {
    nullable: true
  })
  orderBy?: CampaignAndUsersOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "campaignId" | "permissions">;

  @TypeGraphQL.Field(_type => CampaignAndUsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CampaignAndUsersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
