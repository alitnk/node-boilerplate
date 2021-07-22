import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CampaignScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CampaignScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CampaignScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CampaignScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
