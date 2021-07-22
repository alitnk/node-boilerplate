import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersCreateInput } from "../../../inputs/CampaignAndUsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersCreateInput, {
    nullable: false
  })
  data!: CampaignAndUsersCreateInput;
}
