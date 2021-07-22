import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersUpdateInput } from "../../../inputs/CampaignAndUsersUpdateInput";
import { CampaignAndUsersWhereUniqueInput } from "../../../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateInput, {
    nullable: false
  })
  data!: CampaignAndUsersUpdateInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignAndUsersWhereUniqueInput;
}
