import { books, users } from '@@/graphql/data/mock_data';
import { Book as BookType, User as UserType } from '../server/generated/graphql';

class User {
  id: string;
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.id = String(books.length + 1);
    this.name = name;
    this.email = email;
  }
}

class Book {
  id: string;
  body: string;
  author: string;
  createdAt: string;
  constructor(author: string, body: string) {
    this.id = String(books.length + 1);
    this.author = author;
    this.body = body;
    this.createdAt = new Date().toISOString();
  }
}

export function createUserObj(name: string, email: string): UserType {
  return new User(name, email);
}

export function createBookObj(author: string, body: string): BookType {
  return new Book(author, body);
}
