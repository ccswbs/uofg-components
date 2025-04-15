import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { BlockquoteContext } from './blockquote-context';

export type BlockquoteProps = PropsWithChildren<{
  /** Additional classes to apply to the blockquote */
  className?: string;
  /**
   * The color of the blockquote quotation marks
   *
   * @default 'yellow'
   */
  color?: 'yellow' | 'blue';
}>;

/** The Blockquote component is used to highlight a quote or excerpt from another source. */
export function Blockquote({ className, children, color = 'yellow' }: BlockquoteProps) {
  return (
    <BlockquoteContext.Provider value={{ color }}>
      <div className={`uofg-blockquote ${twMerge('flex flex-col gap-2', className)}`}>{children}</div>
    </BlockquoteContext.Provider>
  );
}
Blockquote.displayName = 'Blockquote';

export { BlockquoteAuthor } from './blockquote-author';
export { BlockquoteAuthorLink } from './blockquote-author-link';
export { BlockquoteAuthorName } from './blockquote-author-name';
export { BlockquoteAuthorTitle } from './blockquote-author-title';
export { BlockquoteContent } from './blockquote-content';
