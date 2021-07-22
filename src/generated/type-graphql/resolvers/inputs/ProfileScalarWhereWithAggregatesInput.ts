import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  bio?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
