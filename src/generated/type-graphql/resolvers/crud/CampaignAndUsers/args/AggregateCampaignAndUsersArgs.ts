import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersOrderByInput } from "../../../inputs/CampaignAndUsersOrderByInput";
import { CampaignAndUsersWhereInput } from "../../../inputs/CampaignAndUsersWhereInput";
import { CampaignAndUsersWhereUniqueInput } from "../../../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCampaignAndUsersArgs {
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
}
