import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCampaignInput } from "../inputs/UserCreateOrConnectWithoutCampaignInput";
import { UserCreateWithoutCampaignInput } from "../inputs/UserCreateWithoutCampaignInput";
import { UserUpdateWithoutCampaignInput } from "../inputs/UserUpdateWithoutCampaignInput";
import { UserUpsertWithoutCampaignInput } from "../inputs/UserUpsertWithoutCampaignInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCampaignInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCampaignInput, {
    nullable: true
  })
  create?: UserCreateWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCampaignInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCampaignInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCampaignInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCampaignInput | undefined;
}
