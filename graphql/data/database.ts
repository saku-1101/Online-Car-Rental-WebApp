import { Book, User } from '../dataTypes/dataType';

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
    books: [
      {
        id: '1',
        body: 'just setting up my app',
        author: 'jack',
        createdAt: new Date(2021, 4, 1).toISOString(),
      },
    ],
  },
  {
    id: '1',
    name: 'Yuta',
    email: 'yuta@mail',
    books: [
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
    ],
  },
];

export { books, users };
