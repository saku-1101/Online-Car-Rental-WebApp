import { gql } from '@apollo/client';
export const schema = gql`
  # route operation type
  type Query {
    hello: String!
    books: [Book]! # books を返す # その際に返す情報はBookで定義されたものになる
    users: [User!]!
    allUsers: [User!]!
  }
  # route operation type
  type Mutation {
    createBook(data: BookCreateInput!): Book!
  }
  # Obj-type
  type Book {
    id: ID!
    body: String!
    author: String!
    createdAt: String!
  }
  # Input type
  input BookCreateInput {
    id: ID
    body: String!
    author: String!
  }

  # route operation type
  type Mutation {
    createUser(data: UserCreateInput!): User!
  }

  # Obj-type
  type User {
    id: ID!
    name: String!
    email: String!
  }

  # Input type
  input UserCreateInput {
    id: ID
    name: String!
    email: String!
    #books: [Book] # インプットを受け付けるくせに，オブジェクト方をインプットするように指定したらいけないよねということ
    # クライアントはオブジェクト型にどうインプットしたらいいのだ
  }
`;
