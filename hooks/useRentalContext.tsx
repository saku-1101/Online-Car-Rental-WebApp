import { createContext, useCallback, useContext } from 'react';
import { usePersistedState } from './usePersistedState';
import React from 'react';
import { Rental, RentalsContextType } from './types/rentalContextTypes';

const RentalsContextTypeDefaultValue = {
  rentals: [],
  HandleSetRentals: (newRentals: Rental[]) => [],
  HandleDeleteRentals: (deletedRentals: Rental[]) => [],
};

type RentalsProviderProps = {
  children: React.ReactNode;
};

const RentalsContext = createContext<RentalsContextType>(RentalsContextTypeDefaultValue); // the argument is the initial value

export const useRentalsContext = () => {
  return useContext(RentalsContext);
}; // contextを使う側へのエクスポート

export const RentalsProvider = ({ children }: RentalsProviderProps) => {
  const [rentals, setRentals] = usePersistedState<Rental[]>({
    key: 'rentals',
    initialValue: [] as Rental[],
  });

  const HandleSetRentals = useCallback((newRentals: Rental[]) => {
    setRentals(newRentals);
  }, []);
  const HandleDeleteRentals = useCallback((deletedRentals: Rental[]) => {
    setRentals(deletedRentals);
  }, []);
  const useStateToUseRentalsContext = { rentals, HandleSetRentals, HandleDeleteRentals };

  return (
    <>
      <RentalsContext.Provider value={useStateToUseRentalsContext}>{children}</RentalsContext.Provider>
    </>
  );
}; // contextを提供する側へのエクスポート
