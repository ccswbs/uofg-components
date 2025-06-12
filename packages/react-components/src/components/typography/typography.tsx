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
    base: 'uog:leading-[1.4] uog:[&_strong]:text-body-copy-bold uog:[&_strong]:dark:text-body-copy-bold-on-dark',
    variants: {
      type: {
        h1: 'uog:mt-7.5 uog:text-4xl uog:font-bold uog:text-black uog:dark:text-white uog:font-serif',
        h2: 'uog:mt-7.5 uog:mb-3.75 uog:font-bold uog:text-red uog:text-3xl',
        h3: 'uog:mt-7.5 uog:mb-3.75 uog:font-bold uog:text-body-copy-bold uog:dark:text-body-copy-bold-on-dark uog:light:text-body-copy-bold-on-light uog:text-2xl',
        h4: 'uog:mt-7.5 uog:mb-3.75 uog:font-bold uog:text-body-copy-bold uog:dark:text-body-copy-bold-on-dark uog:light:text-body-copy-bold-on-light uog:text-xl',
        h5: 'uog:mt-7.5 uog:mb-3.75 uog:font-bold uog:text-body-copy-bold uog:dark:text-body-copy-bold-on-dark uog:light:text-body-copy-bold-on-light uog:text-lg',
        h6: 'uog:mt-7.5 uog:mb-3.75 uog:font-bold uog:text-body-copy-bold uog:dark:text-body-copy-bold-on-dark uog:light:text-body-copy-bold-on-light uog:text-base',
        body: 'uog:mt-3.75 uog:text-lg uog:text-body-copy uog:dark:text-body-copy-on-dark uog:light:text-body-copy-on-light uog:font-normal uog:leading-[1.6]',
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
