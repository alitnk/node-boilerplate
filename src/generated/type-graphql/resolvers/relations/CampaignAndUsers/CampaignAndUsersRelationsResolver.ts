import * as TypeGraphQL from "type-graphql";
import { Campaign } from "../../../models/Campaign";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class CampaignAndUsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() campaignAndUsers: CampaignAndUsers, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).campaignAndUsers.findUnique({
      where: {
        campaignId_userId: {
          campaignId: campaignAndUsers.campaignId,
          userId: campaignAndUsers.userId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Campaign, {
    nullable: false
  })
  async campaign(@TypeGraphQL.Root() campaignAndUsers: CampaignAndUsers, @TypeGraphQL.Ctx() ctx: any): Promise<Campaign> {
    return getPrismaFromContext(ctx).campaignAndUsers.findUnique({
      where: {
        campaignId_userId: {
          campaignId: campaignAndUsers.campaignId,
          userId: campaignAndUsers.userId,
        },
      },
    }).campaign({});
  }
}
