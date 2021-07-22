import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Post: crudResolvers.PostCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Campaign: crudResolvers.CampaignCrudResolver,
  CampaignAndUsers: crudResolvers.CampaignAndUsersCrudResolver
};
const relationResolversMap = {
  Post: relationResolvers.PostRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Campaign: relationResolvers.CampaignRelationsResolver,
  CampaignAndUsers: relationResolvers.CampaignAndUsersRelationsResolver
};
const actionResolversMap = {
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  Profile: {
    profile: actionResolvers.FindUniqueProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    createProfile: actionResolvers.CreateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    deleteProfile: actionResolvers.DeleteProfileResolver,
    updateProfile: actionResolvers.UpdateProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    upsertProfile: actionResolvers.UpsertProfileResolver,
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Campaign: {
    campaign: actionResolvers.FindUniqueCampaignResolver,
    findFirstCampaign: actionResolvers.FindFirstCampaignResolver,
    campaigns: actionResolvers.FindManyCampaignResolver,
    createCampaign: actionResolvers.CreateCampaignResolver,
    createManyCampaign: actionResolvers.CreateManyCampaignResolver,
    deleteCampaign: actionResolvers.DeleteCampaignResolver,
    updateCampaign: actionResolvers.UpdateCampaignResolver,
    deleteManyCampaign: actionResolvers.DeleteManyCampaignResolver,
    updateManyCampaign: actionResolvers.UpdateManyCampaignResolver,
    upsertCampaign: actionResolvers.UpsertCampaignResolver,
    aggregateCampaign: actionResolvers.AggregateCampaignResolver,
    groupByCampaign: actionResolvers.GroupByCampaignResolver
  },
  CampaignAndUsers: {
    findUniqueCampaignAndUsers: actionResolvers.FindUniqueCampaignAndUsersResolver,
    findFirstCampaignAndUsers: actionResolvers.FindFirstCampaignAndUsersResolver,
    findManyCampaignAndUsers: actionResolvers.FindManyCampaignAndUsersResolver,
    createCampaignAndUsers: actionResolvers.CreateCampaignAndUsersResolver,
    createManyCampaignAndUsers: actionResolvers.CreateManyCampaignAndUsersResolver,
    deleteCampaignAndUsers: actionResolvers.DeleteCampaignAndUsersResolver,
    updateCampaignAndUsers: actionResolvers.UpdateCampaignAndUsersResolver,
    deleteManyCampaignAndUsers: actionResolvers.DeleteManyCampaignAndUsersResolver,
    updateManyCampaignAndUsers: actionResolvers.UpdateManyCampaignAndUsersResolver,
    upsertCampaignAndUsers: actionResolvers.UpsertCampaignAndUsersResolver,
    aggregateCampaignAndUsers: actionResolvers.AggregateCampaignAndUsersResolver,
    groupByCampaignAndUsers: actionResolvers.GroupByCampaignAndUsersResolver
  }
};
const resolversInfo = {
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Campaign: ["campaign", "findFirstCampaign", "campaigns", "createCampaign", "createManyCampaign", "deleteCampaign", "updateCampaign", "deleteManyCampaign", "updateManyCampaign", "upsertCampaign", "aggregateCampaign", "groupByCampaign"],
  CampaignAndUsers: ["findUniqueCampaignAndUsers", "findFirstCampaignAndUsers", "findManyCampaignAndUsers", "createCampaignAndUsers", "createManyCampaignAndUsers", "deleteCampaignAndUsers", "updateCampaignAndUsers", "deleteManyCampaignAndUsers", "updateManyCampaignAndUsers", "upsertCampaignAndUsers", "aggregateCampaignAndUsers", "groupByCampaignAndUsers"]
};
const relationResolversInfo = {
  Post: ["author"],
  Profile: ["user"],
  User: ["posts", "profile", "campaign", "campaigns"],
  Campaign: ["user", "users"],
  CampaignAndUsers: ["user", "campaign"]
};
const modelsInfo = {
  Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  Profile: ["id", "bio", "userId"],
  User: ["id", "email", "name"],
  Campaign: ["id", "name", "description", "userId"],
  CampaignAndUsers: ["userId", "campaignId", "permissions"]
};
const inputsInfo = {
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "author", "authorId"],
  PostOrderByInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
  ProfileOrderByInput: ["id", "bio", "userId"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "posts", "profile", "campaign", "campaigns"],
  UserOrderByInput: ["id", "email", "name"],
  UserWhereUniqueInput: ["id", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name"],
  CampaignWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "user", "userId", "users"],
  CampaignOrderByInput: ["id", "name", "description", "userId"],
  CampaignWhereUniqueInput: ["id", "userId"],
  CampaignScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "userId"],
  CampaignAndUsersWhereInput: ["AND", "OR", "NOT", "userId", "user", "campaignId", "campaign", "permissions"],
  CampaignAndUsersOrderByInput: ["userId", "campaignId", "permissions"],
  CampaignAndUsersWhereUniqueInput: ["campaignId_userId"],
  CampaignAndUsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "campaignId", "permissions"],
  PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
  PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published"],
  ProfileCreateInput: ["bio", "user"],
  ProfileUpdateInput: ["bio", "user"],
  ProfileCreateManyInput: ["id", "bio", "userId"],
  ProfileUpdateManyMutationInput: ["bio"],
  UserCreateInput: ["email", "name", "posts", "profile", "campaign", "campaigns"],
  UserUpdateInput: ["email", "name", "posts", "profile", "campaign", "campaigns"],
  UserCreateManyInput: ["id", "email", "name"],
  UserUpdateManyMutationInput: ["email", "name"],
  CampaignCreateInput: ["name", "description", "user", "users"],
  CampaignUpdateInput: ["name", "description", "user", "users"],
  CampaignCreateManyInput: ["id", "name", "description", "userId"],
  CampaignUpdateManyMutationInput: ["name", "description"],
  CampaignAndUsersCreateInput: ["permissions", "user", "campaign"],
  CampaignAndUsersUpdateInput: ["permissions", "user", "campaign"],
  CampaignAndUsersCreateManyInput: ["userId", "campaignId", "permissions"],
  CampaignAndUsersUpdateManyMutationInput: ["permissions"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  PostListRelationFilter: ["every", "some", "none"],
  ProfileRelationFilter: ["is", "isNot"],
  CampaignRelationFilter: ["is", "isNot"],
  CampaignAndUsersListRelationFilter: ["every", "some", "none"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  CampaignAndUsersCampaignIdUserIdCompoundUniqueInput: ["campaignId", "userId"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  CampaignCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  CampaignAndUsersCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CampaignUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CampaignAndUsersUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCampaignInput: ["create", "connectOrCreate", "connect"],
  CampaignAndUsersCreateNestedManyWithoutCampaignInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutCampaignInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CampaignAndUsersUpdateManyWithoutCampaignInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CampaignAndUsersCreatepermissionsInput: ["set"],
  UserCreateNestedOneWithoutCampaignsInput: ["create", "connectOrCreate", "connect"],
  CampaignCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  CampaignAndUsersUpdatepermissionsInput: ["set", "push"],
  UserUpdateOneRequiredWithoutCampaignsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CampaignUpdateOneRequiredWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CampaignAndUsersCreateManypermissionsInput: ["set"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateWithoutPostsInput: ["email", "name", "profile", "campaign", "campaigns"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["email", "name", "profile", "campaign", "campaigns"],
  UserCreateWithoutProfileInput: ["email", "name", "posts", "campaign", "campaigns"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["email", "name", "posts", "campaign", "campaigns"],
  PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ProfileCreateWithoutUserInput: ["bio"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  CampaignCreateWithoutUserInput: ["name", "description", "users"],
  CampaignCreateOrConnectWithoutUserInput: ["where", "create"],
  CampaignAndUsersCreateWithoutUserInput: ["permissions", "campaign"],
  CampaignAndUsersCreateOrConnectWithoutUserInput: ["where", "create"],
  CampaignAndUsersCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["bio"],
  CampaignUpsertWithoutUserInput: ["update", "create"],
  CampaignUpdateWithoutUserInput: ["name", "description", "users"],
  CampaignAndUsersUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CampaignAndUsersUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CampaignAndUsersUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CampaignAndUsersScalarWhereInput: ["AND", "OR", "NOT", "userId", "campaignId", "permissions"],
  UserCreateWithoutCampaignInput: ["email", "name", "posts", "profile", "campaigns"],
  UserCreateOrConnectWithoutCampaignInput: ["where", "create"],
  CampaignAndUsersCreateWithoutCampaignInput: ["permissions", "user"],
  CampaignAndUsersCreateOrConnectWithoutCampaignInput: ["where", "create"],
  CampaignAndUsersCreateManyCampaignInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutCampaignInput: ["update", "create"],
  UserUpdateWithoutCampaignInput: ["email", "name", "posts", "profile", "campaigns"],
  CampaignAndUsersUpsertWithWhereUniqueWithoutCampaignInput: ["where", "update", "create"],
  CampaignAndUsersUpdateWithWhereUniqueWithoutCampaignInput: ["where", "data"],
  CampaignAndUsersUpdateManyWithWhereWithoutCampaignInput: ["where", "data"],
  UserCreateWithoutCampaignsInput: ["email", "name", "posts", "profile", "campaign"],
  UserCreateOrConnectWithoutCampaignsInput: ["where", "create"],
  CampaignCreateWithoutUsersInput: ["name", "description", "user"],
  CampaignCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserUpsertWithoutCampaignsInput: ["update", "create"],
  UserUpdateWithoutCampaignsInput: ["email", "name", "posts", "profile", "campaign"],
  CampaignUpsertWithoutUsersInput: ["update", "create"],
  CampaignUpdateWithoutUsersInput: ["name", "description", "user"],
  PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "published"],
  CampaignAndUsersCreateManyUserInput: ["campaignId", "permissions"],
  PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
  CampaignAndUsersUpdateWithoutUserInput: ["permissions", "campaign"],
  CampaignAndUsersCreateManyCampaignInput: ["userId", "permissions"],
  CampaignAndUsersUpdateWithoutCampaignInput: ["permissions", "user"]
};
const outputsInfo = {
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "bio", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCampaign: ["_count", "_avg", "_sum", "_min", "_max"],
  CampaignGroupBy: ["id", "name", "description", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCampaignAndUsers: ["_count", "_avg", "_sum", "_min", "_max"],
  CampaignAndUsersGroupBy: ["userId", "campaignId", "permissions", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_all"],
  PostAvgAggregate: ["id", "authorId"],
  PostSumAggregate: ["id", "authorId"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileCountAggregate: ["id", "bio", "userId", "_all"],
  ProfileAvgAggregate: ["id", "userId"],
  ProfileSumAggregate: ["id", "userId"],
  ProfileMinAggregate: ["id", "bio", "userId"],
  ProfileMaxAggregate: ["id", "bio", "userId"],
  UserCountAggregate: ["id", "email", "name", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name"],
  UserMaxAggregate: ["id", "email", "name"],
  CampaignCountAggregate: ["id", "name", "description", "userId", "_all"],
  CampaignAvgAggregate: ["id", "userId"],
  CampaignSumAggregate: ["id", "userId"],
  CampaignMinAggregate: ["id", "name", "description", "userId"],
  CampaignMaxAggregate: ["id", "name", "description", "userId"],
  CampaignAndUsersCountAggregate: ["userId", "campaignId", "permissions", "_all"],
  CampaignAndUsersAvgAggregate: ["userId", "campaignId"],
  CampaignAndUsersSumAggregate: ["userId", "campaignId"],
  CampaignAndUsersMinAggregate: ["userId", "campaignId"],
  CampaignAndUsersMaxAggregate: ["userId", "campaignId"]
};
const argsInfo = {
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProfileArgs: ["where"],
  FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProfileArgs: ["data"],
  CreateManyProfileArgs: ["data", "skipDuplicates"],
  DeleteProfileArgs: ["where"],
  UpdateProfileArgs: ["data", "where"],
  DeleteManyProfileArgs: ["where"],
  UpdateManyProfileArgs: ["data", "where"],
  UpsertProfileArgs: ["where", "create", "update"],
  AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCampaignArgs: ["where"],
  FindFirstCampaignArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCampaignArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCampaignArgs: ["data"],
  CreateManyCampaignArgs: ["data", "skipDuplicates"],
  DeleteCampaignArgs: ["where"],
  UpdateCampaignArgs: ["data", "where"],
  DeleteManyCampaignArgs: ["where"],
  UpdateManyCampaignArgs: ["data", "where"],
  UpsertCampaignArgs: ["where", "create", "update"],
  AggregateCampaignArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCampaignArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCampaignAndUsersArgs: ["where"],
  FindFirstCampaignAndUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCampaignAndUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCampaignAndUsersArgs: ["data"],
  CreateManyCampaignAndUsersArgs: ["data", "skipDuplicates"],
  DeleteCampaignAndUsersArgs: ["where"],
  UpdateCampaignAndUsersArgs: ["data", "where"],
  DeleteManyCampaignAndUsersArgs: ["where"],
  UpdateManyCampaignAndUsersArgs: ["data", "where"],
  UpsertCampaignAndUsersArgs: ["where", "create", "update"],
  AggregateCampaignAndUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCampaignAndUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







