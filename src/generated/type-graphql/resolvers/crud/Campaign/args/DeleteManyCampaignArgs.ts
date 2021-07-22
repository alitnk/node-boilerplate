import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignWhereInput, {
    nullable: true
  })
  where?: CampaignWhereInput | undefined;
}
