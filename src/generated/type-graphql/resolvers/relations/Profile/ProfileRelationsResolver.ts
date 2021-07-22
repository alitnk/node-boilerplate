import * as TypeGraphQL from "type-graphql";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class ProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() profile: Profile, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).profile.findUnique({
      where: {
        id: profile.id,
      },
    }).user({});
  }
}
