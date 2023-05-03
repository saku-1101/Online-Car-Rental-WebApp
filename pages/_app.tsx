import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { _apolloClient } from '@@/apollo/apollo-client';
import { CustomerProvider } from '@@/hooks/useCustomerContext';
import DraggableCart from '@@/components/atoms/DraggableCart';
import { RentalsProvider } from '@@/hooks/useRentalContext';
import NavBar from '@@/components/morecules/NavBar';
import Footer from '@@/components/atoms/Footer';

// pages 以下の全てのページで共通して使うコンポーネント
// Apollo Clientは現段階ではpages配下でしか呼び出せない模様
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomerProvider>
      <RentalsProvider>
        <ApolloProvider client={_apolloClient}>
          <NavBar />
          <Component {...pageProps} />
          <DraggableCart />
          <Footer />
        </ApolloProvider>
      </RentalsProvider>
    </CustomerProvider>
  );
}
