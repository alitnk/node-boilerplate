import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateWithoutUserInput } from "../inputs/CampaignAndUsersCreateWithoutUserInput";
import { CampaignAndUsersUpdateWithoutUserInput } from "../inputs/CampaignAndUsersUpdateWithoutUserInput";
import { CampaignAndUsersWhereUniqueInput } from "../inputs/CampaignAndUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignAndUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CampaignAndUsersUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: CampaignAndUsersCreateWithoutUserInput;
}
