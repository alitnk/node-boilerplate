import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdateManyWithoutCampaignInput } from "../inputs/CampaignAndUsersUpdateManyWithoutCampaignInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCampaignInput } from "../inputs/UserUpdateOneRequiredWithoutCampaignInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CampaignUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCampaignInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCampaignInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateManyWithoutCampaignInput, {
    nullable: true
  })
  users?: CampaignAndUsersUpdateManyWithoutCampaignInput | undefined;
}
