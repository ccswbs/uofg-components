import { createContext } from 'react';
import { StatisticsProps } from './statistics';

export type StatisticsContextValue = {
  variant: StatisticsProps['variant'];
  incrementCount: () => void;
  decrementCount: () => void;
  count: number;
};

export const StatisticsContext = createContext<StatisticsContextValue | null>(null);
