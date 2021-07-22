import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateWithoutUserInput } from "../inputs/CampaignCreateWithoutUserInput";
import { CampaignUpdateWithoutUserInput } from "../inputs/CampaignUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CampaignUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CampaignCreateWithoutUserInput, {
    nullable: false
  })
  create!: CampaignCreateWithoutUserInput;
}
