import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryBodyProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryBody({ children, className }: StoryBodyProps) {
  const classes = twMerge(
    'uofg-story-body uog:relative uog:flex uog:w-full uog:items-center uog:justify-center uog:overflow-hidden',
    className,
  );

  return <div className={classes}>{children}</div>;
}

StoryBody.displayName = 'StoryBody';
