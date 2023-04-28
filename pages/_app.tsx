import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { _apolloClient } from '@@/apollo/apollo-client';

// pages 以下の全てのページで共通して使うコンポーネント
// Apollo Clientは現段階ではpages配下でしか呼び出せない模様
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={_apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
