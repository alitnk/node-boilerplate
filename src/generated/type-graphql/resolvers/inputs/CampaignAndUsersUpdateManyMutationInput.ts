import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdatepermissionsInput } from "../inputs/CampaignAndUsersUpdatepermissionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => CampaignAndUsersUpdatepermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersUpdatepermissionsInput | undefined;
}
