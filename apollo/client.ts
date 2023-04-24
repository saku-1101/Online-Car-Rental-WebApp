import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
// import { schema } from '../apollo/schema';

let apolloClient;

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/api/graphql',
//   cache: new InMemoryCache(),
// });

function createIsomorphLink() {
  // if (typeof window === 'undefined') {
  //   return new SchemaLink({ schema });
  // } else {
  return new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  });
  // }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export const _apolloClient = apolloClient ?? createApolloClient();
