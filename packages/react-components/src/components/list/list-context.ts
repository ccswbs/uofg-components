import { createContext } from 'react';

export type ListContextValue = {
  parent: 'ol' | 'ul' | null;
  level: number;
};

export const ListContext = createContext<ListContextValue>({
  parent: null,
  level: 0,
});
