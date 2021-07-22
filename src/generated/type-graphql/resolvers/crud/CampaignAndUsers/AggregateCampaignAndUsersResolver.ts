import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCampaignAndUsersArgs } from "./args/AggregateCampaignAndUsersArgs";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { AggregateCampaignAndUsers } from "../../outputs/AggregateCampaignAndUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class AggregateCampaignAndUsersResolver {
  @TypeGraphQL.Query(_returns => AggregateCampaignAndUsers, {
    nullable: false
  })
  async aggregateCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCampaignAndUsersArgs): Promise<AggregateCampaignAndUsers> {
    return getPrismaFromContext(ctx).campaignAndUsers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
