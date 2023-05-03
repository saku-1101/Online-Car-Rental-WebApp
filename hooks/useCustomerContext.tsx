import { createContext, useContext } from 'react';
import { usePersistedState } from './usePersistedState';
import React from 'react';

type CustomerContextType = {
  customerId: number;
  handleSetCustomerId: (customerId: number) => void;
};
const CustomerContextTypeDefaultValue = {
  customerId: 0,
  handleSetCustomerId: (customerId: number) => {},
};

type CustomerProviderProps = {
  children: React.ReactNode;
};

const CustomerContext = createContext<CustomerContextType>(CustomerContextTypeDefaultValue); // the argument is the initial value

export const useCustomerContext = () => {
  return useContext(CustomerContext);
}; // contextを使う側へのエクスポート

export const CustomerProvider = ({ children }: CustomerProviderProps) => {
  const [customerId, setCustomerId] = usePersistedState<number>({
    key: 'customerId',
    initialValue: 0,
  });
  const handleSetCustomerId = (customerId: number) => {
    setCustomerId(customerId);
    console.log(customerId);
  };
  const useStateToUseCustomerContext = { customerId, handleSetCustomerId };

  return (
    <>
      <CustomerContext.Provider value={useStateToUseCustomerContext}>{children}</CustomerContext.Provider>
    </>
  );
}; // contextを提供する側へのエクスポート
