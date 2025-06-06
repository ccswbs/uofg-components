import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryForegroundProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryForeground({ children, className }: StoryForegroundProps) {
  const classes = twMerge(
    'uog:max-w-[137rem] uog:z-10 uog:flex uog:w-full uog:flex-col uog:items-center uog:gap-6 uog:px-4 uog:lg:flex-row',
    className,
  );

  return <div className={`uofg-story-foreground ${classes}`}>{children}</div>;
}

StoryForeground.displayName = 'StoryForeground';
