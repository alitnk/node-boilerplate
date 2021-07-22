import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignRelationFilter } from "../inputs/CampaignRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersWhereInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereInput], {
    nullable: true
  })
  AND?: CampaignAndUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereInput], {
    nullable: true
  })
  OR?: CampaignAndUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereInput], {
    nullable: true
  })
  NOT?: CampaignAndUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  campaignId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CampaignRelationFilter, {
    nullable: true
  })
  campaign?: CampaignRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  permissions?: StringNullableListFilter | undefined;
}
