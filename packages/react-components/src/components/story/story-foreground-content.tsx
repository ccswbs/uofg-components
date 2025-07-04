import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryForegroundContentProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryForegroundContent({ children, className }: StoryForegroundContentProps) {
  const classes = twMerge('flex w-full justify-center px-8 lg:w-1/2 lg:p-0', className);

  return <div className={`uofg-story-foreground-content ${classes}`}>{children}</div>;
}

StoryForegroundContent.displayName = 'StoryForegroundContent';
