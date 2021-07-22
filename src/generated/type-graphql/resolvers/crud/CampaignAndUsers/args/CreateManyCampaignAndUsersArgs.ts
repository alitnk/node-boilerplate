import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignAndUsersCreateManyInput } from "../../../inputs/CampaignAndUsersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCampaignAndUsersArgs {
  @TypeGraphQL.Field(_type => [CampaignAndUsersCreateManyInput], {
    nullable: false
  })
  data!: CampaignAndUsersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
