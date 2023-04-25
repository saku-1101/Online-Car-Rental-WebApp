import { books, users } from '@@/graphql/data/database';
import { QueryResolvers } from '../server/generated/graphql';

export const queries: QueryResolvers = {
  hello: () => 'Hello world!',
  books: () => books,
  users: () => users,
  allUsers: () => users,
};
