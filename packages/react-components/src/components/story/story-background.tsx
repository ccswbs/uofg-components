import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryBackgroundProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryBackground({ children, className }: StoryBackgroundProps) {
  const classes = twMerge('uofg-story-background uog:absolute uog:z-0 uog:h-full uog:max-h-full uog:w-full', className);

  return <div className={classes}>{children}</div>;
}
