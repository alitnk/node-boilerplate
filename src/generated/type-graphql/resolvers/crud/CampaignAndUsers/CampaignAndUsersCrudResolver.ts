import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCampaignAndUsersArgs } from "./args/AggregateCampaignAndUsersArgs";
import { CreateCampaignAndUsersArgs } from "./args/CreateCampaignAndUsersArgs";
import { CreateManyCampaignAndUsersArgs } from "./args/CreateManyCampaignAndUsersArgs";
import { DeleteCampaignAndUsersArgs } from "./args/DeleteCampaignAndUsersArgs";
import { DeleteManyCampaignAndUsersArgs } from "./args/DeleteManyCampaignAndUsersArgs";
import { FindFirstCampaignAndUsersArgs } from "./args/FindFirstCampaignAndUsersArgs";
import { FindManyCampaignAndUsersArgs } from "./args/FindManyCampaignAndUsersArgs";
import { FindUniqueCampaignAndUsersArgs } from "./args/FindUniqueCampaignAndUsersArgs";
import { GroupByCampaignAndUsersArgs } from "./args/GroupByCampaignAndUsersArgs";
import { UpdateCampaignAndUsersArgs } from "./args/UpdateCampaignAndUsersArgs";
import { UpdateManyCampaignAndUsersArgs } from "./args/UpdateManyCampaignAndUsersArgs";
import { UpsertCampaignAndUsersArgs } from "./args/UpsertCampaignAndUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CampaignAndUsers } from "../../../models/CampaignAndUsers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCampaignAndUsers } from "../../outputs/AggregateCampaignAndUsers";
import { CampaignAndUsersGroupBy } from "../../outputs/CampaignAndUsersGroupBy";

@TypeGraphQL.Resolver(_of => CampaignAndUsers)
export class CampaignAndUsersCrudResolver {
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

  @TypeGraphQL.Query(_returns => CampaignAndUsers, {
    nullable: true
  })
  async findFirstCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCampaignAndUsersArgs): Promise<CampaignAndUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => CampaignAndUsers, {
    nullable: false
  })
  async createCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCampaignAndUsersArgs): Promise<CampaignAndUsers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCampaignAndUsersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CampaignAndUsers, {
    nullable: true
  })
  async deleteCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCampaignAndUsersArgs): Promise<CampaignAndUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCampaignAndUsersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCampaignAndUsersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CampaignAndUsers, {
    nullable: false
  })
  async upsertCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCampaignAndUsersArgs): Promise<CampaignAndUsers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCampaignAndUsers, {
    nullable: false
  })
  async aggregateCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCampaignAndUsersArgs): Promise<AggregateCampaignAndUsers> {
    return getPrismaFromContext(ctx).campaignAndUsers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CampaignAndUsersGroupBy], {
    nullable: false
  })
  async groupByCampaignAndUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCampaignAndUsersArgs): Promise<CampaignAndUsersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).campaignAndUsers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
