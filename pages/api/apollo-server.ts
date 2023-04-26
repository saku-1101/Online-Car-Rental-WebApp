// Local API Server
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Resolvers } from '@@/graphql/server/generated/graphql';
import { schema } from '@@/graphql/schemas/schema';
import { mutations, queries, bookResolvers, userResolvers } from '@@/graphql/resolvers/index';

const resolvers: Resolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
  Book: {
    ...bookResolvers,
  },
  User: {
    ...userResolvers,
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers: resolvers });

export default startServerAndCreateNextHandler(server);
