import { createBookObj, createUserObj } from '../data/database';
import { books, users } from '../data/mock_data';
import { BookCreateInput, UserCreateInput, MutationResolvers } from '../server/generated/graphql';

export const mutations: MutationResolvers = {
  createBook: (parent, args: { data: BookCreateInput }) => {
    const book = createBookObj(args.data.body, args.data.author);
    books.push(book);
    return books[books.length - 1];
  },
  createUser: (parent, args: { data: UserCreateInput }) => {
    const user = createUserObj(args.data.name, args.data.email);
    users.push(user);
    return users[users.length - 1];
  },
};
