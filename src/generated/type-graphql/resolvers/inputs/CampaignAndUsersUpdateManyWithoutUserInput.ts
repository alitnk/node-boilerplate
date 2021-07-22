import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyUserInputEnvelope } from "../inputs/CampaignAndUsersCreateManyUserInputEnvelope";
import { CampaignAndUsersCreateOrConnectWithoutUserInput } from "../inputs/CampaignAndUsersCreateOrConnectWithoutUserInput";
import { CampaignAndUsersCreateWithoutUserInput } from "../inputs/CampaignAndUsersCreateWithoutUserInput";
import { CampaignAndUsersScalarWhereInput } from "../inputs/CampaignAndUsersScalarWhereInput";
import { CampaignAndUsersUpdateManyWithWhereWithoutUserInput } from "../inputs/CampaignAndUsersUpdateManyWithWhereWithoutUserInput";
import { CampaignAndUsersUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CampaignAndUsersUpdateWithWhereUniqueWithoutUserInput";
import { CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: CampaignAndUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CampaignAndUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CampaignAndUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: CampaignAndUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  set?: CampaignAndUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CampaignAndUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersWhereUniqueInput], {
    nullable: true
  })
  delete?: CampaignAndUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CampaignAndUsersUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CampaignAndUsersUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CampaignAndUsersScalarWhereInput[] | undefined;
}
