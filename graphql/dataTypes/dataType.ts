// type definition for response data
type Book = { id: string; body: string; author: string; createdAt: string };
type User = { id: string; name: string; email: string; books: Book[] };

export type { Book, User };
