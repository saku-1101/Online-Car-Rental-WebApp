// Local API Server
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import { join } from 'path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const schema = loadSchemaSync('./graphql/schemas/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
});
const resolvers = {};
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const server = new ApolloServer({ schema: schemaWithResolvers });

export default startServerAndCreateNextHandler(server);
