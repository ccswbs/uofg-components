import { createContext } from 'react';

/* Card Context */
export type CardContextValue = {
  isLink: boolean;
  centered: boolean;
  variant: 'vertical' | 'horizontal';
};
export const CardContext = createContext<CardContextValue | null>(null);
