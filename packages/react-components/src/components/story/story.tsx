import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type StoryProps = PropsWithChildren<{
  id?: string;
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function Story({ id, children, className }: StoryProps) {
  const classes = twMerge('flex w-full flex-col', className);

  return (
    <div id={id} className={`uofg-story ${classes}`}>
      {children}
    </div>
  );
}

Story.displayName = 'Story';

export { StoryBackground } from './story-background';
export { StoryBackgroundImage } from './story-background-image';
export { StoryBody } from './story-body';
export { StoryFooter } from './story-footer';
export { StoryForeground } from './story-foreground';
export { StoryForegroundContent } from './story-foreground-content';
export { StoryForegroundImage } from './story-foreground-image';
