import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryForegroundContentProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryForegroundContent({ children, className }: StoryForegroundContentProps) {
  const classes = twMerge(
    'uofg-story-foreground-content uog:flex uog:w-full uog:justify-center uog:px-8 uog:lg:w-1/2 uog:lg:p-0',
    className,
  );

  return <div className={classes}>{children}</div>;
}
