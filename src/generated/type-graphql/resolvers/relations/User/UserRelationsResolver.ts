import * as TypeGraphQL from "type-graphql";
import { Campaign } from "../../../models/Campaign";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { UserCampaignsArgs } from "./args/UserCampaignsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => Campaign, {
    nullable: true
  })
  async campaign(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Campaign | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).campaign({});
  }

  @TypeGraphQL.FieldResolver(_type => [CampaignAndUsers], {
    nullable: false
  })
  async campaigns(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCampaignsArgs): Promise<CampaignAndUsers[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).campaigns(args);
  }
}
