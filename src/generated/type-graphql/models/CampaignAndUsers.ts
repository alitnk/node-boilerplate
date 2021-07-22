import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Campaign } from "../models/Campaign";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CampaignAndUsers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  campaignId!: number;

  campaign?: Campaign;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  permissions!: string[];
}
