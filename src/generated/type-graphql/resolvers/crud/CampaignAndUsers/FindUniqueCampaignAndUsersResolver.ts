import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCampaignAndUsersArgs } from "./args/FindUniqueCampaignAndUsersArgs";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class FindUniqueCampaignAndUsersResolver {
  @TypeGraphQL.Query(_returns => CampaignAndUsers, {
    nullable: true
  })
  async findUniqueCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCampaignAndUsersArgs): Promise<CampaignAndUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
