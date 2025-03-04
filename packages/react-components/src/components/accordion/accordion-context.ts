import { createContext } from 'react';

export type AccordionContextValue = {
  isOpen: boolean;
};
export const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);
