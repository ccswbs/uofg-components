import { createContext } from 'react';
import { BlockquoteProps } from './blockquote';

export type BlockquoteContextValue = {
  color: BlockquoteProps['color'];
  hideQuotationMarks?: boolean;
};

export const BlockquoteContext = createContext<BlockquoteContextValue | null>(null);
