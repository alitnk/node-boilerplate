import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateOrConnectWithoutUserInput } from "../inputs/CampaignCreateOrConnectWithoutUserInput";
import { CampaignCreateWithoutUserInput } from "../inputs/CampaignCreateWithoutUserInput";
import { CampaignUpdateWithoutUserInput } from "../inputs/CampaignUpdateWithoutUserInput";
import { CampaignUpsertWithoutUserInput } from "../inputs/CampaignUpsertWithoutUserInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignCreateWithoutUserInput, {
    nullable: true
  })
  create?: CampaignCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: CampaignUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: true
  })
  connect?: CampaignWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CampaignUpdateWithoutUserInput, {
    nullable: true
  })
  update?: CampaignUpdateWithoutUserInput | undefined;
}
