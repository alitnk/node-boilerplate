import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateManyCampaignInput } from "../inputs/CampaignAndUsersCreateManyCampaignInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignAndUsersCreateManyCampaignInputEnvelope {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateManyCampaignInput], {
    nullable: false
  })
  data!: CampaignAndUsersCreateManyCampaignInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
