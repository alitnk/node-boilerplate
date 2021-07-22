import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersWhereInput } from "../../../inputs/CampaignAndUsersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  where?: CampaignAndUsersWhereInput | undefined;
}
