import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileOrderByInput } from "../../../inputs/ProfileOrderByInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
import { ProfileScalarFieldEnum } from "../../../../enums/ProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfileOrderByInput], {
    nullable: true
  })
  orderBy?: ProfileOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "bio" | "userId"> | undefined;
}
