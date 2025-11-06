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
    /** Whether to emphasize the text with a larger, slightly more opinionated heading style. */
    emphasize: boolean;
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
  emphasize = false,
  ...rest
}: TypographyProps<T>) {
  const Tag = as ?? defaultElement;

  const typography = tv({
    base: 'leading-[1.4] [&_strong]:text-body-copy-bold [&_strong]:dark:text-body-copy-bold-on-dark',
    variants: {
      type: {
        h1: 'mt-7.5 font-serif text-4xl font-bold text-black dark:text-white',
        h2: 'mt-7.5 mb-3.75 text-3xl font-bold text-red dark:text-white light:text-black',
        h3: 'mt-7.5 mb-3.75 text-2xl font-bold text-body-copy-bold dark:text-body-copy-bold-on-dark light:text-body-copy-bold-on-light',
        h4: 'mt-7.5 mb-3.75 text-xl font-bold text-body-copy-bold dark:text-body-copy-bold-on-dark light:text-body-copy-bold-on-light',
        h5: 'mt-7.5 mb-3.75 text-lg font-bold text-body-copy-bold dark:text-body-copy-bold-on-dark light:text-body-copy-bold-on-light',
        h6: 'mt-7.5 mb-3.75 text-base font-bold text-body-copy-bold dark:text-body-copy-bold-on-dark light:text-body-copy-bold-on-light',
        body: 'mt-3.75 text-lg leading-[1.6] font-normal text-body-copy dark:text-body-copy-on-dark light:text-body-copy-on-light',
      },
      emphasize: {
        true: '',
      },
    },
    compoundVariants: [
      {
        type: ['h1'],
        emphasize: true,
        class: 'font-sans text-[5rem] leading-[1.2] font-light',
      },
      {
        type: ['h2'],
        emphasize: true,
        class: 'font-sans text-[4.5rem] leading-[1.2] font-light text-black',
      },
      {
        type: ['h3'],
        emphasize: true,
        class: 'font-sans text-[4rem] leading-[1.2] font-light',
      },
      {
        type: ['h4'],
        emphasize: true,
        class: 'font-sans text-[3.5rem] leading-[1.2] font-light',
      },
      {
        type: ['h5'],
        emphasize: true,
        class: 'font-sans text-[3rem] leading-[1.2] font-light',
      },
      {
        type: ['h6'],
        emphasize: true,
        class: 'font-sans text-[2.5rem] leading-[1.2] font-light',
      },
    ],
  });

  return (
    <Tag {...rest} className={`uofg-typography ${twMerge(typography({ type, emphasize }), className)}`}>
      {children}
    </Tag>
  );
}

Typography.displayName = 'Typography';
