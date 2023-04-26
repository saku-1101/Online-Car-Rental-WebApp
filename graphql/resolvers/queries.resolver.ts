import { books, users } from '@@/graphql/data/mock_data';
import { QueryResolvers } from '../server/generated/graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const queries: QueryResolvers = {
  hello: () => 'Hello world!',
  books: () => books,
  users: () => users,
  allUsers: () => prisma.user.findMany(),
};
