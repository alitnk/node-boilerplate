import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAvgAggregate } from "../outputs/CampaignAvgAggregate";
import { CampaignCountAggregate } from "../outputs/CampaignCountAggregate";
import { CampaignMaxAggregate } from "../outputs/CampaignMaxAggregate";
import { CampaignMinAggregate } from "../outputs/CampaignMinAggregate";
import { CampaignSumAggregate } from "../outputs/CampaignSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CampaignGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => CampaignCountAggregate, {
    nullable: true
  })
  _count!: CampaignCountAggregate | null;

  @TypeGraphQL.Field(_type => CampaignAvgAggregate, {
    nullable: true
  })
  _avg!: CampaignAvgAggregate | null;

  @TypeGraphQL.Field(_type => CampaignSumAggregate, {
    nullable: true
  })
  _sum!: CampaignSumAggregate | null;

  @TypeGraphQL.Field(_type => CampaignMinAggregate, {
    nullable: true
  })
  _min!: CampaignMinAggregate | null;

  @TypeGraphQL.Field(_type => CampaignMaxAggregate, {
    nullable: true
  })
  _max!: CampaignMaxAggregate | null;
}
