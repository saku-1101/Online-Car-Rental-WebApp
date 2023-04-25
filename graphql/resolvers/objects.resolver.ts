import { Book, BookResolvers, User, UserResolvers } from '../server/generated/graphql';

const bookResolvers: BookResolvers = {
  author: (book: Book) => book.id,
  body: (book: Book) => book.body,
  createdAt: (book: Book) => book.createdAt,
  id: (book: Book) => book.id,
};
const userResolvers: UserResolvers = {
  email: (user: User) => user.email,
  name: (user: User) => user.name,
  id: (user: User) => user.id,
};

export { bookResolvers, userResolvers };
