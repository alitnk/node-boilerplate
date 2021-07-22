import * as TypeGraphQL from "type-graphql";

export enum CampaignScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  userId = "userId"
}
TypeGraphQL.registerEnumType(CampaignScalarFieldEnum, {
  name: "CampaignScalarFieldEnum",
  description: undefined,
});
