import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyUserInput } from "../inputs/CampaignAndUsersCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateManyUserInput], {
    nullable: false
  })
  data!: CampaignAndUsersCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
