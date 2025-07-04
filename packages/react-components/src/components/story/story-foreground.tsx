import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryForegroundProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryForeground({ children, className }: StoryForegroundProps) {
  const classes = twMerge('z-10 flex w-full max-w-[137rem] flex-col items-center gap-6 px-4 lg:flex-row', className);

  return <div className={`uofg-story-foreground ${classes}`}>{children}</div>;
}

StoryForeground.displayName = 'StoryForeground';
