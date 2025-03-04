import { createContext } from 'react';

export type HeroContextType = {
  variant: 'spotlight' | 'basic';
};

export const HeroContext = createContext<HeroContextType | null>(null);
