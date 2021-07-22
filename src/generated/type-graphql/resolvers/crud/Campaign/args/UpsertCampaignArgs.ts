import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignCreateInput } from "../../../inputs/CampaignCreateInput";
import { CampaignUpdateInput } from "../../../inputs/CampaignUpdateInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignCreateInput, {
    nullable: false
  })
  create!: CampaignCreateInput;

  @TypeGraphQL.Field(_type => CampaignUpdateInput, {
    nullable: false
  })
  update!: CampaignUpdateInput;
}
