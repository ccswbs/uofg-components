import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Container } from '../container/container';

export type StoryFooterProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
}>;

export function StoryFooter({ children, className }: StoryFooterProps) {
  const classes = tv({
    slots: {
      base: 'uofg-story-footer uog:flex uog:w-full uog:items-center uog:justify-center uog:bg-black uog:p-4 uog:text-white',
      container: 'uofg-story-footer-container uog:flex uog:items-center uog:justify-center uog:p-2 uog:text-xl',
    },
  });

  const { base, container } = classes();

  return (
    <div className={twMerge(base(), className)}>
      <Container className={container()}>{children}</Container>
    </div>
  );
}

StoryFooter.displayName = 'StoryFooter';
