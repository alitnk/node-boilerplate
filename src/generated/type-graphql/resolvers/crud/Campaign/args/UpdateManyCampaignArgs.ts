import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignUpdateManyMutationInput } from "../../../inputs/CampaignUpdateManyMutationInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignUpdateManyMutationInput, {
    nullable: false
  })
  data!: CampaignUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  where?: CampaignWhereInput | undefined;
}
