import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCampaignAndUsersArgs } from "./args/FindManyCampaignAndUsersArgs";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class FindManyCampaignAndUsersResolver {
  @TypeGraphQL.Query(_returns => [CampaignAndUsers], {
    nullable: false
  })
  async findManyCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCampaignAndUsersArgs): Promise<CampaignAndUsers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
