import { createContext } from 'react';

export type ListContextValue = { nesting: number };

export const ListContext = createContext<ListContextValue>({
  nesting: 0,
});
