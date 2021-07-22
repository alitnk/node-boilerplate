import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersUpdateManyMutationInput } from "../../../inputs/CampaignAndUsersUpdateManyMutationInput";
import { CampaignAndUsersWhereInput } from "../../../inputs/CampaignAndUsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: CampaignAndUsersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  where?: CampaignAndUsersWhereInput | undefined;
}
