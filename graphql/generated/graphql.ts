/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStatus: Status;
  createUser: User;
};


export type MutationCreateStatusArgs = {
  data: StatusCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  statuses: Array<Maybe<Status>>;
};

export type Status = {
  __typename?: 'Status';
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
};

export type StatusCreateInput = {
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateStatusMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateStatusMutation = { __typename?: 'Mutation', createStatus: { __typename?: 'Status', author: string } };

export type CreateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', name: string } };

export type GetStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusQuery = { __typename?: 'Query', statuses: Array<{ __typename?: 'Status', author: string, body: string, createdAt: string, id: string } | null> };


export const CreateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"StringValue","value":"SSS","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"StringValue","value":"SSS","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"StringValue","value":"SSS","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]} as unknown as DocumentNode<CreateStatusMutation, CreateStatusMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"hoge","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"StringValue","value":"foo@hoge.co.jp","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetStatusQuery, GetStatusQueryVariables>;