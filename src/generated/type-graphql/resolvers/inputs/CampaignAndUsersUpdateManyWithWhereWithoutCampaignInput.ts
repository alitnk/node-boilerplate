import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersScalarWhereInput } from "../inputs/CampaignAndUsersScalarWhereInput";
import { CampaignAndUsersUpdateManyMutationInput } from "../inputs/CampaignAndUsersUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersScalarWhereInput, {
    nullable: false
  })
  where!: CampaignAndUsersScalarWhereInput;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: CampaignAndUsersUpdateManyMutationInput;
}
