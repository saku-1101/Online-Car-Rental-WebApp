// Local API Server
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from '@@/pages/api/apollo/resolvers/resolver';
import { typeDefs } from '@@/pages/api/apollo/schemas/schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
