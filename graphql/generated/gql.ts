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
    "mutation CreateStatus {\n  createStatus(data: {body: \"SSS\", author: \"SSS\", createdAt: \"SSS\"}) {\n    author\n  }\n}": types.CreateStatusDocument,
    "mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}": types.CreateUserDocument,
    "query getStatus {\n  statuses {\n    author\n    body\n    createdAt\n    id\n  }\n}": types.GetStatusDocument,
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
export function graphql(source: "mutation CreateStatus {\n  createStatus(data: {body: \"SSS\", author: \"SSS\", createdAt: \"SSS\"}) {\n    author\n  }\n}"): (typeof documents)["mutation CreateStatus {\n  createStatus(data: {body: \"SSS\", author: \"SSS\", createdAt: \"SSS\"}) {\n    author\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}"): (typeof documents)["mutation CreateUser {\n  createUser(data: {name: \"hoge\", email: \"foo@hoge.co.jp\"}) {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getStatus {\n  statuses {\n    author\n    body\n    createdAt\n    id\n  }\n}"): (typeof documents)["query getStatus {\n  statuses {\n    author\n    body\n    createdAt\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;