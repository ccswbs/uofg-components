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
    base: 'inline-flex cursor-pointer items-center justify-center px-6 py-4 text-lg font-medium no-underline shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    variants: {
      color: {
        red: 'focus-visible:ring-red',
        yellow: 'focus-visible:ring-yellow',
        blue: 'focus-visible:ring-blue',
        green: 'focus-visible:ring-green',
        black: 'focus-visible:ring-black',
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
