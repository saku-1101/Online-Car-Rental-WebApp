import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { _apolloClient } from '@@/pages/api/apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={_apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
