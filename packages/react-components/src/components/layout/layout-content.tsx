import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Container } from '../container/container';

export type LayoutContentProps = PropsWithChildren<{
  /** Additional classes to apply to the component. */
  className?: string;
  /**
   * Whether the content should be rendered as a Container component.
   *
   * @default true
   */
  container?: boolean;
}>;

export function LayoutContent({ children, className, container = true }: LayoutContentProps) {
  const classes = `uofg-layout-content ${twMerge('uofg-layout-content uog:pb-4 uog:flex-1', className)}`;

  if (container) {
    return (
      <Container id="content" as="main" className={classes}>
        {children}
      </Container>
    );
  }

  return (
    <main id="content" className={classes}>
      {children}
    </main>
  );
}
