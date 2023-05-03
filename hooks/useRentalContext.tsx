import { createContext, useCallback, useContext } from 'react';
import { usePersistedState } from './usePersistedState';
import React from 'react';
import { Rental, Funk, RentalsContextType } from './types/rentalContextTypes';

const RentalsContextTypeDefaultValue = {
  rentals: [],
  HandleSetRentals: (rental: Rental) => [],
  HandleDeleteRentals: (rental: Rental[]) => [],
};

type RentalsProviderProps = {
  children: React.ReactNode;
};

const RentalsContext = createContext<RentalsContextType>(RentalsContextTypeDefaultValue); // the argument is the initial value

export const useRentalsContext = () => {
  return useContext(RentalsContext);
}; // contextを使う側へのエクスポート

export const RentalsProvider = ({ children }: RentalsProviderProps) => {
  const [rentals, setRentals] = usePersistedState<Rental[] | Funk<Rental[]>>({
    key: 'rentals',
    initialValue: [],
  });
  const HandleSetRentals = useCallback((rental: Rental) => {
    setRentals((prevRentals) => [...prevRentals, rental]);
  }, []);
  const HandleDeleteRentals = useCallback((newRentals: Rental[]) => {
    setRentals((prevRentals) => prevRentals.filter((r) => newRentals.includes(r)));
  }, []);
  const useStateToUseRentalsContext = { rentals, HandleSetRentals, HandleDeleteRentals };

  return (
    <>
      <RentalsContext.Provider value={useStateToUseRentalsContext}>{children}</RentalsContext.Provider>
    </>
  );
}; // contextを提供する側へのエクスポート
