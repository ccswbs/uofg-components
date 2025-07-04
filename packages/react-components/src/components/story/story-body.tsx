import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryBodyProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryBody({ children, className }: StoryBodyProps) {
  const classes = twMerge('relative flex w-full items-center justify-center overflow-hidden', className);

  return <div className={`uofg-story-body ${classes}`}>{children}</div>;
}

StoryBody.displayName = 'StoryBody';
