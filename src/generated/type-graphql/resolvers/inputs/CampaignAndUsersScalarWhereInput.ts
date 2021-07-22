import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersScalarWhereInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereInput], {
    nullable: true
  })
  AND?: CampaignAndUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereInput], {
    nullable: true
  })
  OR?: CampaignAndUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereInput], {
    nullable: true
  })
  NOT?: CampaignAndUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  campaignId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  permissions?: StringNullableListFilter | undefined;
}
