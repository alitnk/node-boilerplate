import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Campaign } from "../models/Campaign";
import { CampaignAndUsers } from "../models/CampaignAndUsers";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  posts?: Post[];

  profile?: Profile | null;

  campaign?: Campaign | null;

  campaigns?: CampaignAndUsers[];
}
