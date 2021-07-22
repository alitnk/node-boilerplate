import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignCreateManyInput } from "../../../inputs/CampaignCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCampaignArgs {
  @TypeGraphQL.Field(_type => [CampaignCreateManyInput], {
    nullable: false
  })
  data!: CampaignCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
