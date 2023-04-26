import { Book, User } from '../server/generated/graphql';

const books: Book[] = [
  {
    id: '2',
    body: 'inviting coworkers',
    author: 'jack',
    createdAt: new Date(2021, 4, 2).toISOString(),
  },
  {
    id: '1',
    body: 'just setting up my app',
    author: 'jack',
    createdAt: new Date(2021, 4, 1).toISOString(),
  },
];

const users: User[] = [
  {
    id: '2',
    name: 'Sakura',
    email: 'sakura@mail',
  },
  {
    id: '1',
    name: 'Yuta',
    email: 'yuta@mail',
  },
];

export { books, users };
