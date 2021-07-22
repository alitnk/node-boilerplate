import * as TypeGraphQL from "type-graphql";
import { Campaign } from "../../../models/Campaign";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { User } from "../../../models/User";
import { CampaignUsersArgs } from "./args/CampaignUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Campaign)
export class CampaignRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() campaign: Campaign, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).campaign.findUnique({
      where: {
        id: campaign.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [CampaignAndUsers], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() campaign: Campaign, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CampaignUsersArgs): Promise<CampaignAndUsers[]> {
    return getPrismaFromContext(ctx).campaign.findUnique({
      where: {
        id: campaign.id,
      },
    }).users(args);
  }
}
