import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateWithoutUserInput } from "../inputs/CampaignCreateWithoutUserInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignCreateWithoutUserInput, {
    nullable: false
  })
  create!: CampaignCreateWithoutUserInput;
}
