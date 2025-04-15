import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type BlockquoteAuthorTitleProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function BlockquoteAuthorTitle({ children, className, ...rest }: BlockquoteAuthorTitleProps) {
  return (
    <span {...rest} className={twMerge('uofg-blockquote-author-title uog:italic', className)}>
      {children}
    </span>
  );
}
