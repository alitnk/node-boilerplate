import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateOrConnectWithoutUsersInput } from "../inputs/CampaignCreateOrConnectWithoutUsersInput";
import { CampaignCreateWithoutUsersInput } from "../inputs/CampaignCreateWithoutUsersInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => CampaignCreateWithoutUsersInput, {
    nullable: true
  })
  create?: CampaignCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: CampaignCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: true
  })
  connect?: CampaignWhereUniqueInput | undefined;
}
