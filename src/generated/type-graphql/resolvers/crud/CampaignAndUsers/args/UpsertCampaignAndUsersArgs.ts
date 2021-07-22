import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersCreateInput } from "../../../inputs/CampaignAndUsersCreateInput";
import { CampaignAndUsersUpdateInput } from "../../../inputs/CampaignAndUsersUpdateInput";
import { CampaignAndUsersWhereUniqueInput } from "../../../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignAndUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateInput, {
    nullable: false
  })
  create!: CampaignAndUsersCreateInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateInput, {
    nullable: false
  })
  update!: CampaignAndUsersUpdateInput;
}
