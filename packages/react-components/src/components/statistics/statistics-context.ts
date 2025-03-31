import { createContext } from 'react';
import { StatisticsProps } from './statistics';

export type StatisticsContextValue = {
  variant: StatisticsProps['variant'];
  incrementCount: () => void;
};

export const StatisticsContext = createContext<StatisticsContextValue | null>(null);
