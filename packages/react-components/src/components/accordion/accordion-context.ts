import type { RefObject } from 'react';
import { createContext } from 'react';

export type AccordionContextValue = {
  isOpen: boolean;
  buttonRef: RefObject<HTMLButtonElement | null>;
};
export const AccordionContext = createContext<AccordionContextValue | null>(null);