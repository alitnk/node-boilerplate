import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCampaignArgs } from "./args/GroupByCampaignArgs";
import { Campaign } from "../../../models/Campaign";
import { CampaignGroupBy } from "../../outputs/CampaignGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Campaign)
export class GroupByCampaignResolver {
  @TypeGraphQL.Query(_returns => [CampaignGroupBy], {
    nullable: false
  })
  async groupByCampaign(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCampaignArgs): Promise<CampaignGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaign.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
