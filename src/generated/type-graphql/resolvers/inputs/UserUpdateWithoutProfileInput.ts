import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersUpdateManyWithoutUserInput } from "../inputs/CampaignAndUsersUpdateManyWithoutUserInput";
import { CampaignUpdateOneWithoutUserInput } from "../inputs/CampaignUpdateOneWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutProfileInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CampaignUpdateOneWithoutUserInput, {
    nullable: true
  })
  campaign?: CampaignUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersUpdateManyWithoutUserInput, {
    nullable: true
  })
  campaigns?: CampaignAndUsersUpdateManyWithoutUserInput | undefined;
}
