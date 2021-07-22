import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignWhereInput } from "../inputs/CampaignWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignRelationFilter {
  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  is?: CampaignWhereInput | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  isNot?: CampaignWhereInput | undefined;
}
