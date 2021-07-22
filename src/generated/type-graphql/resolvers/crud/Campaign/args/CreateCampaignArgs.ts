import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignCreateInput } from "../../../inputs/CampaignCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignCreateInput, {
    nullable: false
  })
  data!: CampaignCreateInput;
}
