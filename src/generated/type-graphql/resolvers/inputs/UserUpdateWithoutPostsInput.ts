import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdateManyWithoutUserInput } from "../inputs/CampaignAndUsersUpdateManyWithoutUserInput";
import { CampaignUpdateOneWithoutUserInput } from "../inputs/CampaignUpdateOneWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfileUpdateOneWithoutUserInput } from "../inputs/ProfileUpdateOneWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutPostsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpdateOneWithoutUserInput, {
    nullable: true
  })
  campaign?: CampaignUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateManyWithoutUserInput, {
    nullable: true
  })
  campaigns?: CampaignAndUsersUpdateManyWithoutUserInput | undefined;
}
