'use client';

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
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'black' | 'white' | 'primary' | 'secondary';
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
    base: 'inline-flex cursor-pointer items-center justify-center px-6 py-4 text-lg font-medium no-underline shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    variants: {
      color: {
        red: 'focus-visible:ring-red',
        yellow: 'focus-visible:ring-yellow',
        blue: 'focus-visible:ring-blue',
        green: 'focus-visible:ring-green',
        black: 'focus-visible:ring-black',
        white: 'focus-visible:ring-white',
        primary: 'focus-visible:ring-red dark:focus-visible:ring-yellow',
        secondary: 'focus-visible:ring-blue dark:focus-visible:ring-white',
      },
      outlined: {
        true: 'border-2',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
    compoundVariants: [
      {
        color: 'red',
        outlined: false,
        class: 'bg-red text-red-contrast',
      },
      {
        color: 'red',
        outlined: true,
        class: 'border-red text-red',
      },
      {
        color: 'red',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-red-focus',
      },
      {
        color: 'red',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-red hocus-visible:text-red-contrast',
      },
      {
        color: 'yellow',
        outlined: false,
        class: 'bg-yellow text-yellow-contrast',
      },
      {
        color: 'yellow',
        outlined: true,
        class: 'border-yellow text-yellow',
      },
      {
        color: 'yellow',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-yellow-focus',
      },
      {
        color: 'yellow',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-yellow hocus-visible:text-yellow-contrast',
      },
      {
        color: 'blue',
        outlined: false,
        class: 'bg-blue text-blue-contrast',
      },
      {
        color: 'blue',
        outlined: true,
        class: 'border-blue text-blue',
      },
      {
        color: 'blue',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-blue-focus',
      },
      {
        color: 'blue',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-blue hocus-visible:text-blue-contrast',
      },
      {
        color: 'green',
        outlined: false,
        class: 'bg-green text-green-contrast',
      },
      {
        color: 'green',
        outlined: true,
        class: 'border-green text-green',
      },
      {
        color: 'green',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-green-focus',
      },
      {
        color: 'green',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-green hocus-visible:text-green-contrast',
      },
      {
        color: 'black',
        outlined: false,
        class: 'bg-black text-black-contrast',
      },
      {
        color: 'black',
        outlined: true,
        class: 'border-black text-black',
      },
      {
        color: 'black',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-black-focus',
      },
      {
        color: 'black',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-black hocus-visible:text-black-contrast',
      },
      {
        color: 'white',
        outlined: false,
        class: 'bg-white text-black',
      },
      {
        color: 'white',
        outlined: true,
        class: 'border-white text-black',
      },
      {
        color: 'white',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-grey-light-focus',
      },
      {
        color: 'white',
        outlined: true,
        disabled: false,
        class: 'hocus-visible:bg-white hocus-visible:text-black',
      },
      {
        color: 'primary',
        outlined: false,
        class: 'bg-red text-red-contrast dark:bg-yellow dark:text-yellow-contrast',
      },
      {
        color: 'primary',
        outlined: true,
        class: 'border-red text-red dark:border-yellow dark:text-yellow',
      },
      {
        color: 'primary',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-red-focus dark:hocus-visible:bg-yellow-focus',
      },
      {
        color: 'primary',
        outlined: true,
        disabled: false,
        class:
          'hocus-visible:bg-red hocus-visible:text-red-contrast dark:hocus-visible:bg-yellow dark:hocus-visible:text-yellow-contrast',
      },
      {
        color: 'secondary',
        outlined: false,
        class: 'bg-blue text-blue-contrast dark:bg-white dark:text-white-contrast',
      },
      {
        color: 'secondary',
        outlined: true,
        class: 'border-blue text-blue dark:border-white dark:text-white',
      },
      {
        color: 'secondary',
        outlined: false,
        disabled: false,
        class: 'hocus-visible:bg-blue-focus dark:hocus-visible:bg-grey-light-focus',
      },
      {
        color: 'secondary',
        outlined: true,
        disabled: false,
        class:
          'hocus-visible:bg-blue hocus-visible:text-blue-contrast dark:hocus-visible:bg-white dark:hocus-visible:text-white-contrast',
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
