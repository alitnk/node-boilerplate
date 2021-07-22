import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignUpdateInput } from "../../../inputs/CampaignUpdateInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignUpdateInput, {
    nullable: false
  })
  data!: CampaignUpdateInput;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignWhereUniqueInput;
}
