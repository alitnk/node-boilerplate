import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CampaignCreateNestedOneWithoutUserInput } from "../inputs/CampaignCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutCampaignsInput {
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

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CampaignCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  campaign?: CampaignCreateNestedOneWithoutUserInput | undefined;
}
