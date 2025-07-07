import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type GridProps = PropsWithChildren<{
  /** Extra CSS classes to add to the grid container (optional). */
  className?: string;

  /**
   * Sets whether the template values should be applied to rows or columns of the grid. Use 'row' for row templates and
   * 'column' for column templates.
   */
  major?: 'row' | 'column';

  /**
   * Specifies the size settings for each row or column at different screen sizes. Pass an array of objects, each with:
   *
   * - 'breakpoint': The screen size where these settings apply (e.g. 'sm', 'md', 'lg', 'xl', '2xl').
   * - 'value': An array of numbers or strings that define the sizes:
   *
   *   - Numbers are treated as fractions ('fr') of available space.
   *   - Strings are used directly (like '100px', 'auto').
   *
   * This works like the CSS grid-template-rows or grid-template-columns properties for responsive layouts.
   */
  template: {
    breakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    value: number[] | string[];
  }[];

  alignment: {
    x: 'start' | 'center' | 'end' | 'stretch';
    y: 'start' | 'center' | 'end' | 'stretch';
  };
  gap: {
    x: number;
    y: number;
  };
}>;

export function Grid({ children, className }: GridProps) {
  const classes = tv({
    base: 'grid',
  });

  return <div className={`uofg-grid ${twMerge(classes(), className)}`}>{children}</div>;
}

Grid.displayName = 'Contact';
