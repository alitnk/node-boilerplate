import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersListRelationFilter } from "../inputs/CampaignAndUsersListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignWhereInput {
  @TypeGraphQL.Field(_type => [CampaignWhereInput], {
    nullable: true
  })
  AND?: CampaignWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignWhereInput], {
    nullable: true
  })
  OR?: CampaignWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignWhereInput], {
    nullable: true
  })
  NOT?: CampaignWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersListRelationFilter, {
    nullable: true
  })
  users?: CampaignAndUsersListRelationFilter | undefined;
}
