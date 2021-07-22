import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProfileInput } from "../inputs/UserCreateOrConnectWithoutProfileInput";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileInput } from "../inputs/UserUpdateWithoutProfileInput";
import { UserUpsertWithoutProfileInput } from "../inputs/UserUpsertWithoutProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutProfileInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProfileInput, {
    nullable: true
  })
  create?: UserCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProfileInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProfileInput | undefined;
}
