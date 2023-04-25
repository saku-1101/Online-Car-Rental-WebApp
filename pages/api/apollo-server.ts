// Local API Server
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { books, users } from '@@/graphql/data/database';
import { BookCreateInput, UserCreateInput } from '@@/graphql/server/generated/graphql';
import { Book, User } from '@@/graphql/dataTypes/dataType';

const schema = loadSchemaSync('./graphql/schemas/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
});
// const resolvers = loadFilesSync(path.join(__dirname, '../../graphql/resolvers'));
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    books: () => books,
    users: () => users,
  },
  Mutation: {
    createBook: (input: BookCreateInput) => {
      return books.find((book) => book.id == input.id);
    },
    createUser: (input: UserCreateInput) => {
      return users.find((user) => user.id == input.id);
    },
  },
  Book: {
    author: (book: Book) => book.id,
    body: (book: Book) => book.body,
    createdAt: (book: Book) => book.createdAt,
    id: (book: Book) => book.id,
  },
  User: {
    email: (user: User) => user.email,
    name: (user: User) => user.name,
    id: (user: User) => user.id,
  },
};
// const schemaWithResolvers = addResolversToSchema({
//   schema,
//   resolvers: mergeResolvers(resolvers),
// });
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: resolvers,
});
// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers: ,
// });
const server = new ApolloServer({ schema: schemaWithResolvers });

export default startServerAndCreateNextHandler(server);
