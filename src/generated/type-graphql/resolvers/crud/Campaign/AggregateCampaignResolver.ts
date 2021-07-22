import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCampaignArgs } from "./args/AggregateCampaignArgs";
import { Campaign } from "../../../models/Campaign";
import { AggregateCampaign } from "../../outputs/AggregateCampaign";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Campaign)
export class AggregateCampaignResolver {
  @TypeGraphQL.Query(_returns => AggregateCampaign, {
    nullable: false
  })
  async aggregateCampaign(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCampaignArgs): Promise<AggregateCampaign> {
    return getPrismaFromContext(ctx).campaign.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
