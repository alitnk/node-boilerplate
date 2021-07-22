import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersAvgAggregate } from "../outputs/CampaignAndUsersAvgAggregate";
import { CampaignAndUsersCountAggregate } from "../outputs/CampaignAndUsersCountAggregate";
import { CampaignAndUsersMaxAggregate } from "../outputs/CampaignAndUsersMaxAggregate";
import { CampaignAndUsersMinAggregate } from "../outputs/CampaignAndUsersMinAggregate";
import { CampaignAndUsersSumAggregate } from "../outputs/CampaignAndUsersSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCampaignAndUsers {
  @TypeGraphQL.Field(_type => CampaignAndUsersCountAggregate, {
    nullable: true
  })
  _count!: CampaignAndUsersCountAggregate | null;

  @TypeGraphQL.Field(_type => CampaignAndUsersAvgAggregate, {
    nullable: true
  })
  _avg!: CampaignAndUsersAvgAggregate | null;

  @TypeGraphQL.Field(_type => CampaignAndUsersSumAggregate, {
    nullable: true
  })
  _sum!: CampaignAndUsersSumAggregate | null;

  @TypeGraphQL.Field(_type => CampaignAndUsersMinAggregate, {
    nullable: true
  })
  _min!: CampaignAndUsersMinAggregate | null;

  @TypeGraphQL.Field(_type => CampaignAndUsersMaxAggregate, {
    nullable: true
  })
  _max!: CampaignAndUsersMaxAggregate | null;
}
