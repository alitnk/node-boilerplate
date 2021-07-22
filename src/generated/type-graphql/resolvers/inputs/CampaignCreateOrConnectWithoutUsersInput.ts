import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateWithoutUsersInput } from "../inputs/CampaignCreateWithoutUsersInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignWhereUniqueInput;

  @TypeGraphQL.Field(_type => CampaignCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CampaignCreateWithoutUsersInput;
}
