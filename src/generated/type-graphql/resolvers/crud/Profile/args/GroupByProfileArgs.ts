import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileOrderByInput } from "../../../inputs/ProfileOrderByInput";
import { ProfileScalarWhereWithAggregatesInput } from "../../../inputs/ProfileScalarWhereWithAggregatesInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileScalarFieldEnum } from "../../../../enums/ProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfileOrderByInput], {
    nullable: true
  })
  orderBy?: ProfileOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "bio" | "userId">;

  @TypeGraphQL.Field(_type => ProfileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
