import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateCampaignAndUsersArgs } from "./args/UpdateCampaignAndUsersArgs";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class UpdateCampaignAndUsersResolver {
  @TypeGraphQL.Mutation(_returns => CampaignAndUsers, {
    nullable: true
  })
  async updateCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCampaignAndUsersArgs): Promise<CampaignAndUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
