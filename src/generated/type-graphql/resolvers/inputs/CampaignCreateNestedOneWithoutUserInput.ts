import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateOrConnectWithoutUserInput } from "../inputs/CampaignCreateOrConnectWithoutUserInput";
import { CampaignCreateWithoutUserInput } from "../inputs/CampaignCreateWithoutUserInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignCreateWithoutUserInput, {
    nullable: true
  })
  create?: CampaignCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: true
  })
  connect?: CampaignWhereUniqueInput | undefined;
}
