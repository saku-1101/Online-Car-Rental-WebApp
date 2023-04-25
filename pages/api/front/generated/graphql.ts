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

export type Book = {
  __typename?: 'Book';
  User?: Maybe<User>;
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};

export type BookCreateInput = {
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
  createUser?: Maybe<User>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<BookCreateInput>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Maybe<Book>>;
  hello: Scalars['String'];
  users: Array<Maybe<User>>;
};

export type User = {
  __typename?: 'User';
  books?: Maybe<Array<Maybe<Book>>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateBookMutationVariables = Exact<{
  input: BookCreateInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook?: { __typename?: 'Book', body: string, author: string, createdAt: string } | null };

export type CreateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', name: string } | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', author: string, body: string, createdAt: string, id: string } | null> };

export type SayHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type SayHelloQuery = { __typename?: 'Query', hello: string };


export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"hoge","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"StringValue","value":"foo@hoge.co.jp","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;
export const SayHelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sayHello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"}}]}}]} as unknown as DocumentNode<SayHelloQuery, SayHelloQueryVariables>;