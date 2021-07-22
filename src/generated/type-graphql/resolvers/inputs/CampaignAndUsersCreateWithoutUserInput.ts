import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreatepermissionsInput } from "../inputs/CampaignAndUsersCreatepermissionsInput";
import { CampaignCreateNestedOneWithoutUsersInput } from "../inputs/CampaignCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersCreatepermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersCreatepermissionsInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  campaign!: CampaignCreateNestedOneWithoutUsersInput;
}
