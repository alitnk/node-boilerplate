import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyUserInputEnvelope } from "../inputs/CampaignAndUsersCreateManyUserInputEnvelope";
import { CampaignAndUsersCreateOrConnectWithoutUserInput } from "../inputs/CampaignAndUsersCreateOrConnectWithoutUserInput";
import { CampaignAndUsersCreateWithoutUserInput } from "../inputs/CampaignAndUsersCreateWithoutUserInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: CampaignAndUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CampaignAndUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CampaignAndUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CampaignAndUsersWhereUniqueInput[] | undefined;
}
