import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersWhereInput } from "../inputs/CampaignAndUsersWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersListRelationFilter {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  every?: CampaignAndUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  some?: CampaignAndUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersWhereInput, {
    nullable: true
  })
  none?: CampaignAndUsersWhereInput | undefined;
}
