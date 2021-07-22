import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignOrderByInput } from "../../../inputs/CampaignOrderByInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";
import { CampaignScalarFieldEnum } from "../../../../enums/CampaignScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  where?: CampaignWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CampaignOrderByInput], {
    nullable: true
  })
  orderBy?: CampaignOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: true
  })
  cursor?: CampaignWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CampaignScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "userId"> | undefined;
}
