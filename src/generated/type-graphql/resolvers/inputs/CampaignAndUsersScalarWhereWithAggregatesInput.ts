import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CampaignAndUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CampaignAndUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CampaignAndUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  campaignId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  permissions?: StringNullableListFilter | undefined;
}
