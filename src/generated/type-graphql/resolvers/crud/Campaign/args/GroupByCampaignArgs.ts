import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignOrderByInput } from "../../../inputs/CampaignOrderByInput";
import { CampaignScalarWhereWithAggregatesInput } from "../../../inputs/CampaignScalarWhereWithAggregatesInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";
import { CampaignScalarFieldEnum } from "../../../../enums/CampaignScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  where?: CampaignWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CampaignOrderByInput], {
    nullable: true
  })
  orderBy?: CampaignOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "userId">;

  @TypeGraphQL.Field(_type => CampaignScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CampaignScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
