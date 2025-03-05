import { createContext } from 'react';
import { LinkCarouselProps } from './link-carousel';

export type LinkCarouselId = string | number;

export type LinkCarouselContextValue = {
  previousActiveId: LinkCarouselId | null;
  clearPreviousActiveId: () => void;
  activeId: LinkCarouselId | null;
  setActiveId: (id: LinkCarouselId) => void;
  stack: LinkCarouselProps['stack'];
  direction: LinkCarouselProps['direction'];
};
export const LinkCarouselContext = createContext<LinkCarouselContextValue | null>(null);
