import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'button';

type ButtonElementType = ElementType | 'button';

type ButtonPropsAs<T extends ButtonElementType> = {
  as?: T;
};

type ButtonPropsBase = {
  /**
   * The color of the button
   *
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'black';
  /**
   * Whether the button should be outlined
   *
   * @default false
   */
  outlined?: boolean;
  /** Additional classes to apply to the button */
  className?: string;
  /**
   * Whether the button is disabled
   *
   * @default false
   */
  disabled?: boolean;
};

export type ButtonProps<T extends ButtonElementType = typeof defaultElement> = PropsWithChildren<
  ButtonPropsAs<T> & ComponentPropsWithoutRef<T> & ButtonPropsBase
>;
/**
 * The Button component is an interactive component designed to capture user actions (such as submitting forms). It can
 * also function as a link to another page or resource.
 */
export function Button<T extends ButtonElementType = typeof defaultElement>({
  as,
  color = 'red',
  outlined = false,
  children,
  className,
  disabled = false,
  ...rest
}: ButtonProps<T>) {
  const Component = as ?? defaultElement;

  const button = tv({
    base: 'uog:font-medium uog:shadow-sm uog:inline-flex uog:items-center uog:justify-center uog:px-6 uog:py-4 uog:text-lg uog:no-underline uog:transition-colors uog:focus-visible:outline-none uog:focus-visible:ring-2 uog:focus-visible:ring-offset-2',
    variants: {
      color: {
        red: 'uog:focus-visible:ring-red',
        yellow: 'uog:focus-visible:ring-yellow',
        blue: 'uog:focus-visible:ring-blue',
        green: 'uog:focus-visible:ring-green',
        black: 'uog:focus-visible:ring-black',
      },
      outlined: {
        true: 'uog:border-2',
      },
      disabled: {
        true: 'uog:cursor-not-allowed uog:opacity-50',
      },
    },
    compoundVariants: [
      {
        color: 'red',
        outlined: false,
        class: 'uog:bg-red uog:text-red-contrast',
      },
      {
        color: 'red',
        outlined: true,
        class: 'uog:border-red uog:text-red',
      },
      {
        color: 'red',
        outlined: false,
        disabled: false,
        class: 'uog:hocus-visible:bg-red-focus',
      },
      {
        color: 'red',
        outlined: true,
        disabled: false,
        class: 'uog:hocus-visible:bg-red uog:hocus-visible:text-red-contrast',
      },
      {
        color: 'yellow',
        outlined: false,
        class: 'uog:bg-yellow uog:text-yellow-contrast',
      },
      {
        color: 'yellow',
        outlined: true,
        class: 'uog:border-yellow uog:text-yellow',
      },
      {
        color: 'yellow',
        outlined: false,
        disabled: false,
        class: 'uog:hocus-visible:bg-yellow-focus',
      },
      {
        color: 'yellow',
        outlined: true,
        disabled: false,
        class: 'uog:hocus-visible:bg-yellow uog:hocus-visible:text-yellow-contrast',
      },
      {
        color: 'blue',
        outlined: false,
        class: 'uog:bg-blue uog:text-blue-contrast',
      },
      {
        color: 'blue',
        outlined: true,
        class: 'uog:border-blue uog:text-blue',
      },
      {
        color: 'blue',
        outlined: false,
        disabled: false,
        class: 'uog:hocus-visible:bg-blue-focus',
      },
      {
        color: 'blue',
        outlined: true,
        disabled: false,
        class: 'uog:hocus-visible:bg-blue uog:hocus-visible:text-blue-contrast',
      },
      {
        color: 'green',
        outlined: false,
        class: 'uog:bg-green uog:text-green-contrast',
      },
      {
        color: 'green',
        outlined: true,
        class: 'uog:border-green uog:text-green',
      },
      {
        color: 'green',
        outlined: false,
        disabled: false,
        class: 'uog:hocus-visible:bg-green-focus',
      },
      {
        color: 'green',
        outlined: true,
        disabled: false,
        class: 'uog:hocus-visible:bg-green uog:hocus-visible:text-green-contrast',
      },
      {
        color: 'black',
        outlined: false,
        class: 'uog:bg-black uog:text-black-contrast',
      },
      {
        color: 'black',
        outlined: true,
        class: 'uog:border-black uog:text-black',
      },
      {
        color: 'black',
        outlined: false,
        disabled: false,
        class: 'uog:hocus-visible:bg-black-focus',
      },
      {
        color: 'black',
        outlined: true,
        disabled: false,
        class: 'uog:hocus-visible:bg-black uog:hocus-visible:text-black-contrast',
      },
    ],
  });

  const classes = twMerge(button({ color, outlined, disabled }), className);

  return (
    <Component className={`uofg-button ${classes}`} disabled={disabled} {...rest}>
      {children}
    </Component>
  );
}
Button.displayName = 'Button';
