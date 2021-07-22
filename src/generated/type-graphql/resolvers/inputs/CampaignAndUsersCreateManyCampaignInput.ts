import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManypermissionsInput } from "../inputs/CampaignAndUsersCreateManypermissionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateManyCampaignInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateManypermissionsInput, {
    nullable: true
  })
  permissions?: CampaignAndUsersCreateManypermissionsInput | undefined;
}
