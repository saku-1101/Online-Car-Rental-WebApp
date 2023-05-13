import { useCallback, useState } from 'react';

type Props<T> = {
  key: string;
  initialValue: T;
};

type Result<T> = readonly [T, (v: T) => void];

export const usePersistedState = <T>({ key, initialValue }: Props<T>): Result<T> => {
  const getItemFromStorage = <T>(key: string, defaultValue?: T) => {
    try {
      const val = JSON.parse(sessionStorage.getItem(key) + '');
      if (val !== null) {
        return val;
      }
      return sessionStorage.setItem(key, JSON.stringify(defaultValue));
    } catch {
      return defaultValue;
    }
  };

  const [state, setState] = useState<T>(getItemFromStorage<T>(key, initialValue));

  const setValue = useCallback(
    (value: T) => {
      sessionStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    [key],
  );

  return [state, setValue] as const;
};
