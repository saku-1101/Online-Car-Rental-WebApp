import { books, users } from '../data/database';
import { BookCreateInput, UserCreateInput, MutationResolvers } from '../server/generated/graphql';

export const mutations: MutationResolvers = {
  createBook: (input: BookCreateInput) => {
    return books.find((book) => book.id == input.id);
  },
  createUser: (input: UserCreateInput) => {
    return users.find((user) => user.id == input.id);
  },
};
