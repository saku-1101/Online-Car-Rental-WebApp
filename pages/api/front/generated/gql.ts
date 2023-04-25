/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateBook($input: BookCreateInput!) {\n  createBook(input: $input) {\n    body\n    author\n    createdAt\n  }\n}": types.CreateBookDocument,
    "mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}": types.CreateUserDocument,
    "query getBooks {\n  books {\n    author\n    body\n    createdAt\n    id\n  }\n}": types.GetBooksDocument,
    "query sayHello {\n  hello\n}": types.SayHelloDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateBook($input: BookCreateInput!) {\n  createBook(input: $input) {\n    body\n    author\n    createdAt\n  }\n}"): (typeof documents)["mutation CreateBook($input: BookCreateInput!) {\n  createBook(input: $input) {\n    body\n    author\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}"): (typeof documents)["mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getBooks {\n  books {\n    author\n    body\n    createdAt\n    id\n  }\n}"): (typeof documents)["query getBooks {\n  books {\n    author\n    body\n    createdAt\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query sayHello {\n  hello\n}"): (typeof documents)["query sayHello {\n  hello\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;