import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyCampaignInputEnvelope } from "../inputs/CampaignAndUsersCreateManyCampaignInputEnvelope";
import { CampaignAndUsersCreateOrConnectWithoutCampaignInput } from "../inputs/CampaignAndUsersCreateOrConnectWithoutCampaignInput";
import { CampaignAndUsersCreateWithoutCampaignInput } from "../inputs/CampaignAndUsersCreateWithoutCampaignInput";
import { CampaignAndUsersScalarWhereInput } from "../inputs/CampaignAndUsersScalarWhereInput";
import { CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput } from "../inputs/CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput";
import { CampaignAndUsersUpdateWithWhereUniqueWithoutCampaignInput } from "../inputs/CampaignAndUsersUpdateWithWhereUniqueWithoutCampaignInput";
import { CampaignAndUsersUpsertWithWhereUniqueWithoutCampaignInput } from "../inputs/CampaignAndUsersUpsertWithWhereUniqueWithoutCampaignInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateManyWithoutCampaignInput {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateWithoutCampaignInput], {
    nullable: true
  })
  create?: CampaignAndUsersCreateWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateOrConnectWithoutCampaignInput], {
    nullable: true
  })
  connectOrCreate?: CampaignAndUsersCreateOrConnectWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpsertWithWhereUniqueWithoutCampaignInput], {
    nullable: true
  })
  upsert?: CampaignAndUsersUpsertWithWhereUniqueWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateManyCampaignInputEnvelope, {
    nullable: true
  })
  createMany?: CampaignAndUsersCreateManyCampaignInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpdateWithWhereUniqueWithoutCampaignInput], {
    nullable: true
  })
  update?: CampaignAndUsersUpdateWithWhereUniqueWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput], {
    nullable: true
  })
  updateMany?: CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput[] | undefined;

  @TypeGraphQL.Field(_type => [CampaignAndUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CampaignAndUsersScalarWhereInput[] | undefined;
}
