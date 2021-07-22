import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersWhereUniqueInput } from "../../../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignAndUsersWhereUniqueInput;
}
