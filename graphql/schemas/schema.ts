import { gql } from 'graphql-tag';

// 生データスキーマ
export const typeDefs = gql`
  type Query {
    statuses: [Status]! # status を返す # その際に返す情報はStatusで定義されたものになる
    # getAuthors: [String]! # 作者一覧を返す
    hello: String! # 文字列を返す
  }

  type Status {
    id: String!
    body: String!
    author: String!
    createdAt: String!
  }
`;
