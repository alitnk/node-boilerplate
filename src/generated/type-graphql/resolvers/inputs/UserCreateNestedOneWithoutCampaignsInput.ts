import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCampaignsInput } from "../inputs/UserCreateOrConnectWithoutCampaignsInput";
import { UserCreateWithoutCampaignsInput } from "../inputs/UserCreateWithoutCampaignsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCampaignsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCampaignsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCampaignsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCampaignsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
