import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'h1';

type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

type HeadingPropsAs<T extends HeadingElementType> = {
  as?: T;
};

type HeadingPropsBase = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export type HeadingProps<T extends HeadingElementType = typeof defaultElement> = PropsWithChildren<
  HeadingPropsAs<T> & ComponentPropsWithoutRef<T> & HeadingPropsBase
>;

export function Heading<T extends HeadingElementType = typeof defaultElement>({
  level,
  children,
  className,
  as,
  ...rest
}: HeadingProps) {
  const Tag = as ?? `h${level}`;

  const heading = tv({
    base: twMerge('tw:font-bold tw:leading-tight tw:text-body-copy-bold', className),
    variants: {
      level: {
        1: 'tw:my-7 tw:text-4xl tw:text-red',
        2: 'tw:my-3 tw:text-3xl',
        3: 'tw:my-3 tw:text-2xl',
        4: 'tw:my-3 tw:text-xl',
        5: 'tw:my-3 tw:text-lg',
        6: 'tw:my-3 tw:text-lg',
      },
    },
  });

  return (
    <Tag {...rest} className={heading({ level })}>
      {children}
    </Tag>
  );
}

Heading.displayName = 'Heading';
