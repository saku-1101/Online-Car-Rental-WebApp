import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { _apolloClient } from '@@/apollo/apollo-client';
import { CustomerProvider } from '@@/hooks/useCustomerContext';
import DraggableCart from '@@/components/atoms/DraggableCart';
import { RentalsProvider } from '@@/hooks/useRentalContext';
import NavBar from '@@/components/morecules/NavBar';
import Footer from '@@/components/atoms/Footer';
import { usePersistedState } from '@@/hooks/usePersistedState';
import { Rental } from '@@/hooks/types/rentalContextTypes';
import router from 'next/router';
import { useEffect } from 'react';

// pages 以下の全てのページで共通して使うコンポーネント
// Apollo Clientは現段階ではpages配下でしか呼び出せない模様
export default function App({ Component, pageProps }: AppProps) {
  // 初回レンダリング前にsessionStorageをサーバが読めるようにしておく
  const [customerId, setCustomerId] = usePersistedState<number>({ key: 'customerId', initialValue: 0 });
  const [rentals, setRentals] = usePersistedState<Rental[]>({ key: 'rentals', initialValue: [] });
  useEffect(() => {
    setCustomerId(0);
    setRentals([]);
  }, []);
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
