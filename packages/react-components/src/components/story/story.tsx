import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function Story({ children, className }: StoryProps) {
  const classes = twMerge('uofg-story uog:flex uog:w-full uog:flex-col', className);

  return <div className={classes}>{children}</div>;
}

Story.displayName = 'Story';

export { StoryBackground } from './story-background';
export { StoryBackgroundImage } from './story-background-image';
export { StoryBody } from './story-body';
export { StoryFooter } from './story-footer';
export { StoryForeground } from './story-foreground';
export { StoryForegroundContent } from './story-foreground-content';
export { StoryForegroundImage } from './story-foreground-image';
