import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateOrConnectWithoutUserInput } from "../inputs/ProfileCreateOrConnectWithoutUserInput";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";
import { ProfileUpsertWithoutUserInput } from "../inputs/ProfileUpsertWithoutUserInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput, {
    nullable: true
  })
  create?: ProfileCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: ProfileUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput, {
    nullable: true
  })
  update?: ProfileUpdateWithoutUserInput | undefined;
}
