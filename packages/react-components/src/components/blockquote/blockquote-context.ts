import { createContext } from 'react';
import { BlockquoteProps } from './blockquote';

export type BlockquoteContextValue = {
  color: BlockquoteProps['color'];
};

export const BlockquoteContext = createContext<BlockquoteContextValue | null>(null);
