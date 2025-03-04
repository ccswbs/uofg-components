import { createContext } from 'react';

/* Card Context */
export type CardContextValue = {
  isLink: boolean;
  centered: boolean;
};
export const CardContext = createContext<CardContextValue | null>(null);
