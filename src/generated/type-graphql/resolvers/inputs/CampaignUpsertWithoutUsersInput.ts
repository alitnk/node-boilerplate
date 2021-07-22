import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateWithoutUsersInput } from "../inputs/CampaignCreateWithoutUsersInput";
import { CampaignUpdateWithoutUsersInput } from "../inputs/CampaignUpdateWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => CampaignUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: CampaignUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => CampaignCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CampaignCreateWithoutUsersInput;
}
