import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCampaignInput } from "../inputs/UserCreateOrConnectWithoutCampaignInput";
import { UserCreateWithoutCampaignInput } from "../inputs/UserCreateWithoutCampaignInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCampaignInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCampaignInput, {
    nullable: true
  })
  create?: UserCreateWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCampaignInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
