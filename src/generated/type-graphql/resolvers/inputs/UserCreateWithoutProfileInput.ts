import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignAndUsersCreateNestedManyWithoutUserInput } from "../inputs/CampaignAndUsersCreateNestedManyWithoutUserInput";
import { CampaignCreateNestedOneWithoutUserInput } from "../inputs/CampaignCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutProfileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  campaign?: CampaignCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignAndUsersCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  campaigns?: CampaignAndUsersCreateNestedManyWithoutUserInput | undefined;
}
