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
      base: 'flex w-full items-center justify-center bg-black p-4 text-white',
      container: 'flex items-center justify-center p-2 text-xl',
    },
  });

  const { base, container } = classes();

  return (
    <div className={`uofg-story-footer ${twMerge(base(), className)}`}>
      <Container className={`uofg-story-footer-container ${container()}`}>{children}</Container>
    </div>
  );
}

StoryFooter.displayName = 'StoryFooter';
