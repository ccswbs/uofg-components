import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
export type HeadingProps<T extends HeadingElementType = 'h1'> = PropsWithChildren<
  {
    /**
     * The element to render the heading as.
     * @default 'h1'
     */
    as?: T;
    /**
     * The heading level.
     */
    level: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Additional classes to apply to the heading.
     */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

export function Heading<T extends HeadingElementType = 'h1'>({
  level,
  children,
  className,
  as,
  ...rest
}: HeadingProps<T>) {
  const Tag = as ?? `h${level}`;

  const heading = tv({
    base: 'tw:font-bold tw:leading-tight tw:text-body-copy-bold',
    variants: {
      level: {
        1: 'tw:my-7 tw:text-4xl tw:text-red tw:font-serif',
        2: 'tw:my-3 tw:text-3xl',
        3: 'tw:my-3 tw:text-2xl',
        4: 'tw:my-3 tw:text-xl',
        5: 'tw:my-3 tw:text-lg',
        6: 'tw:my-3 tw:text-lg',
      },
    },
  });

  return (
    <Tag {...rest} className={`uofg-heading ${twMerge(heading({ level }), className)}`}>
      {children}
    </Tag>
  );
}

Heading.displayName = 'Heading';
