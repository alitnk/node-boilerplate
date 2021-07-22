import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCampaignArgs {
  @TypeGraphQL.Field(_type => CampaignWhereUniqueInput, {
    nullable: false
  })
  where!: CampaignWhereUniqueInput;
}
