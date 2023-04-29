// Local API Server
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Resolvers } from '@@/graphql/server/generated/graphql';
import { schema } from '@@/graphql/schemas/schema';
import {
  mutations,
  queries,
  Rental as rental,
  Customer as customer,
  Car as car,
  PaymentMethod as paymentMethod,
} from '@@/graphql/resolvers/index';

// Queries that you can use to test the API
const resolvers: Resolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
  Rental: {
    ...rental,
  },
  Customer: {
    ...customer,
  },
  Car: {
    ...car,
  },
  PaymentMethod: {
    ...paymentMethod,
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers: resolvers });

export default startServerAndCreateNextHandler(server);
