import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type GridProps = PropsWithChildren<{
  id?: string;
  /** Extra CSS classes to add to the grid container (optional). */
  className?: string;

  /**
   * Sets whether the template values should be applied to rows or columns of the grid. Use 'row' for row templates and
   * 'column' for column templates.
   *
   * @default 'column'
   */
  major?: 'row' | 'column';

  /**
   * Specifies the size settings for each row or column at different screen sizes. Pass an array of objects, each with:
   *
   * - 'breakpoint': The screen size where these settings apply (e.g. 'sm', 'md', 'lg', 'xl', '2xl').
   * - 'value': An array of strings that define the sizes:
   *
   *   - Values are used directly (like '100px', 'auto').
   *
   * This works like the CSS grid-template-rows or grid-template-columns properties for responsive layouts.
   */
  template: {
    [K in Breakpoints]?: string[];
  };
  alignment?: {
    x: 'start' | 'center' | 'end' | 'stretch';
    y: 'start' | 'center' | 'end' | 'stretch';
  };
  gap?: {
    x: number | string;
    y: number | string;
  };
}>;

export function Grid({ id, template, major = 'column', gap, alignment, children, className }: GridProps) {
  const classes = tv({
    base: 'grid gap-x-(--uofg-grid-gap-x) gap-y-(--uofg-grid-gap-y)',
    variants: {
      major: { row: 'grid-flow-col', column: '' },
      hasBaseTemplate: { true: '' },
      hasSmTemplate: { true: '' },
      hasMdTemplate: { true: '' },
      hasLgTemplate: { true: '' },
      hasXlTemplate: { true: '' },
      has2XlTemplate: { true: '' },
      alignmentX: {
        start: 'justify-items-start',
        center: 'justify-items-center',
        end: 'justify-items-end',
        stretch: 'justify-items-stretch',
      },
      alignmentY: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      },
    },
    compoundVariants: [
      {
        hasBaseTemplate: true,
        major: 'column',
        class: 'grid-cols-(--uofg-grid-template-column)',
      },
      {
        hasSmTemplate: true,
        major: 'column',
        class: 'sm:grid-cols-(--uofg-grid-sm-template-column)',
      },
      {
        hasMdTemplate: true,
        major: 'column',
        class: 'md:grid-cols-(--uofg-grid-md-template-column)',
      },
      {
        hasLgTemplate: true,
        major: 'column',
        class: 'lg:grid-cols-(--uofg-grid-lg-template-column)',
      },
      {
        hasXlTemplate: true,
        major: 'column',
        class: 'xl:grid-cols-(--uofg-grid-xl-template-column)',
      },
      {
        has2XlTemplate: true,
        major: 'column',
        class: '2xl:grid-cols-(--uofg-grid-2xl-template-column)',
      },
      {
        hasBaseTemplate: true,
        major: 'row',
        class: 'grid-rows-(--uofg-grid-template-row)',
      },
      {
        hasSmTemplate: true,
        major: 'row',
        class: 'sm:grid-rows-(--uofg-grid-sm-template-row)',
      },
      {
        hasMdTemplate: true,
        major: 'row',
        class: 'md:grid-rows-(--uofg-grid-md-template-row)',
      },
      {
        hasLgTemplate: true,
        major: 'row',
        class: 'lg:grid-rows-(--uofg-grid-lg-template-row)',
      },
      {
        hasXlTemplate: true,
        major: 'row',
        class: 'xl:grid-rows-(--uofg-grid-xl-template-row)',
      },
      {
        has2XlTemplate: true,
        major: 'row',
        class: '2xl:grid-rows-(--uofg-grid-2xl-template-row)',
      },
    ],
  })({
    major: major,
    hasBaseTemplate: template.base !== undefined,
    hasSmTemplate: template.sm !== undefined,
    hasMdTemplate: template.md !== undefined,
    hasLgTemplate: template.lg !== undefined,
    hasXlTemplate: template.xl !== undefined,
    has2XlTemplate: template['2xl'] !== undefined,
    alignmentX: alignment?.x ?? 'start',
    alignmentY: alignment?.y ?? 'start',
  });

  const vars = Object.entries(template).reduce(
    (acc, [breakpoint, values]) => {
      acc[`--uofg-grid-${breakpoint}-template-${major}`] = values.join(' ');
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <div
      id={id}
      className={`uofg-grid ${twMerge(classes, className)}`}
      style={{
        ...vars,
        // @ts-ignore
        '--uofg-grid-gap-x': typeof gap?.x === 'string' ? gap?.x : `${gap?.x}px`,
        '--uofg-grid-gap-y': typeof gap?.y === 'string' ? gap?.y : `${gap?.y}px`,
      }}
    >
      {children}
    </div>
  );
}

Grid.displayName = 'Grid';
