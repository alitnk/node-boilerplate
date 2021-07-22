import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateOrConnectWithoutUsersInput } from "../inputs/CampaignCreateOrConnectWithoutUsersInput";
import { CampaignCreateWithoutUsersInput } from "../inputs/CampaignCreateWithoutUsersInput";
import { CampaignUpdateWithoutUsersInput } from "../inputs/CampaignUpdateWithoutUsersInput";
import { CampaignUpsertWithoutUsersInput } from "../inputs/CampaignUpsertWithoutUsersInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignUpdateOneRequiredWithoutUsersInput {
  @TypeGraphQL.Field(_type => CampaignCreateWithoutUsersInput, {
    nullable: true
  })
  create?: CampaignCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: CampaignCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: CampaignUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: true
  })
  connect?: CampaignWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: CampaignUpdateWithoutUsersInput | undefined;
}
