import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { Profile } from "../../../models/Profile";
import { AggregateProfile } from "../../outputs/AggregateProfile";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class AggregateProfileResolver {
  @TypeGraphQL.Query(_returns => AggregateProfile, {
    nullable: false
  })
  async aggregateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfileArgs): Promise<AggregateProfile> {
    return getPrismaFromContext(ctx).profile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
