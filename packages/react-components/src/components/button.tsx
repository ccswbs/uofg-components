import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'button';

type ButtonElementType = ElementType<{ href?: string }, 'a'> | 'button';

type ButtonPropsAs<T extends ButtonElementType> = {
  as?: T;
};

type ButtonPropsBase = {
  /**
   * The color of the button
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
  /**
   * Whether the button should be outlined
   * @default false
   */
  outlined?: boolean;
  /**
   * Additional classes to apply to the button
   */
  className?: string;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
};

export type ButtonProps<T extends ButtonElementType = typeof defaultElement> = PropsWithChildren<
  ButtonPropsAs<T> & ComponentPropsWithoutRef<T> & ButtonPropsBase
>;
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
    base: 'tw:font-medium tw:shadow-sm tw:inline-flex tw:items-center tw:justify-center tw:px-6 tw:py-4 tw:text-lg tw:no-underline tw:transition-colors tw:focus-visible:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2',
    variants: {
      color: {
        'red': 'tw:focus-visible:ring-red',
        'yellow': 'tw:focus-visible:ring-yellow',
        'blue': 'tw:focus-visible:ring-blue',
        'green': 'tw:focus-visible:ring-green',
        'light-grey': 'tw:focus-visible:ring-light-grey',
        'dark-grey': 'tw:focus-visible:ring-dark-grey',
        'black': 'tw:focus-visible:ring-black',
        'white': 'tw:focus-visible:ring-white',
      },
      outlined: {
        true: 'tw:border-2',
      },
      disabled: {
        true: 'tw:cursor-not-allowed tw:opacity-50',
      },
    },
    compoundVariants: [
      {
        color: 'red',
        outlined: false,
        class: 'tw:bg-red tw:text-red-contrast',
      },
      {
        color: 'red',
        outlined: true,
        class: 'tw:border-red tw:text-red',
      },
      {
        color: 'red',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-red-focus',
      },
      {
        color: 'red',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-red tw:hocus-visible:text-red-contrast',
      },
      {
        color: 'yellow',
        outlined: false,
        class: 'tw:bg-yellow tw:text-yellow-contrast',
      },
      {
        color: 'yellow',
        outlined: true,
        class: 'tw:border-yellow tw:text-yellow',
      },
      {
        color: 'yellow',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-yellow-focus',
      },
      {
        color: 'yellow',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-yellow tw:hocus-visible:text-yellow-contrast',
      },
      {
        color: 'blue',
        outlined: false,
        class: 'tw:bg-blue tw:text-blue-contrast',
      },
      {
        color: 'blue',
        outlined: true,
        class: 'tw:border-blue tw:text-blue',
      },
      {
        color: 'blue',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-blue-focus',
      },
      {
        color: 'blue',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-blue tw:hocus-visible:text-blue-contrast',
      },
      {
        color: 'green',
        outlined: false,
        class: 'tw:bg-green tw:text-green-contrast',
      },
      {
        color: 'green',
        outlined: true,
        class: 'tw:border-green tw:text-green',
      },
      {
        color: 'green',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-green-focus',
      },
      {
        color: 'green',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-green tw:hocus-visible:text-green-contrast',
      },
      {
        color: 'light-grey',
        outlined: false,
        class: 'tw:bg-light-grey tw:text-light-grey-contrast',
      },
      {
        color: 'light-grey',
        outlined: true,
        class: 'tw:border-light-grey tw:text-light-grey',
      },
      {
        color: 'light-grey',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-light-grey-focus',
      },
      {
        color: 'light-grey',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-light-grey tw:hocus-visible:text-light-grey-contrast',
      },
      {
        color: 'dark-grey',
        outlined: false,
        class: 'tw:bg-dark-grey tw:text-dark-grey-contrast',
      },
      {
        color: 'dark-grey',
        outlined: true,
        class: 'tw:border-dark-grey tw:text-dark-grey',
      },
      {
        color: 'dark-grey',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-dark-grey-focus',
      },
      {
        color: 'dark-grey',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-dark-grey tw:hocus-visible:text-dark-grey-contrast',
      },
      {
        color: 'black',
        outlined: false,
        class: 'tw:bg-black tw:text-black-contrast',
      },
      {
        color: 'black',
        outlined: true,
        class: 'tw:border-black tw:text-black',
      },
      {
        color: 'black',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-black-focus',
      },
      {
        color: 'black',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-black tw:hocus-visible:text-black-contrast',
      },
      {
        color: 'white',
        outlined: false,
        class: 'tw:bg-white tw:text-white-contrast',
      },
      {
        color: 'white',
        outlined: true,
        class: 'tw:border-white tw:text-white',
      },
      {
        color: 'white',
        outlined: false,
        disabled: false,
        class: 'tw:hocus-visible:bg-white-focus',
      },
      {
        color: 'white',
        outlined: true,
        disabled: false,
        class: 'tw:hocus-visible:bg-white tw:hocus-visible:text-white-contrast',
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
