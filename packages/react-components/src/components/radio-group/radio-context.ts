import { createContext } from 'react';

export type RadioContextValue<T> = {
  setSelected: (value: T) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RadioContext = createContext<RadioContextValue<any> | undefined>(undefined);
