import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'span';

export type TypographyElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
export type TypographyProps<T extends TypographyElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element to render the text as.
     *
     * @default 'span'
     */
    as?: T;
    /** The text style */
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
    /** Additional classes to apply to the text. */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;
/** The Typography component is a typographic component used to display headings or blocks of text. */
export function Typography<T extends TypographyElementType = typeof defaultElement>({
  type,
  children,
  className,
  as,
  ...rest
}: TypographyProps<T>) {
  const Tag = as ?? defaultElement;

  const typography = tv({
    base: 'tw:block tw:leading-[1.4] tw:has-[strong]:text-body-copy-bold',
    variants: {
      type: {
        h1: 'tw:mt-7.5 tw:text-4xl tw:font-bold tw:text-black tw:font-serif',
        h2: 'tw:mt-7.5 tw:mb-3.75 tw:font-bold tw:text-red tw:text-3xl',
        h3: 'tw:mt-7.5 tw:mb-3.75 tw:font-bold tw:text-body-copy-bold tw:text-2xl',
        h4: 'tw:mt-7.5 tw:mb-3.75 tw:font-bold tw:text-body-copy-bold tw:text-xl',
        h5: 'tw:mt-7.5 tw:mb-3.75 tw:font-bold tw:text-body-copy-bold tw:text-lg',
        h6: 'tw:mt-7.5 tw:mb-3.75 tw:font-bold tw:text-body-copy-bold tw:text-base',
        body: 'tw:mt-3.75 tw:text-lg tw:text-body-copy tw:font-normal tw:leading-[1.6]',
      },
    },
  });

  return (
    <Tag {...rest} className={`uofg-typography ${twMerge(typography({ type }), className)}`}>
      {children}
    </Tag>
  );
}

Typography.displayName = 'Typography';
