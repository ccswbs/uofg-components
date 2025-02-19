import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'button';

type ButtonElementType = ElementType<{ href?: string }, 'a'> | 'button';

type ButtonPropsAs<T extends ButtonElementType> = {
  as?: T;
};

type ButtonPropsBase = {
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'grey-light' | 'grey-dark' | 'black' | 'white';
  outlined?: boolean;
  className?: string;
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
    base: 'tw:font-medium tw:shadow-sm tw:inline-flex tw:items-center tw:justify-center tw:px-6 tw:py-4 tw:text-lg tw:no-underline tw:transition-colors tw:focus:outline-none',
    variants: {
      color: {
        red: 'tw:focus:ring-red',
        yellow: 'tw:focus:ring-yellow',
        blue: 'tw:focus:ring-blue',
        green: 'tw:focus:ring-green',
        'grey-light': 'tw:focus:ring-grey-light',
        'grey-dark': 'tw:focus:ring-grey-dark',
        black: 'tw:focus:ring-black',
        white: 'tw:focus:ring-white',
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
        class: 'tw:hocus:bg-red-focus',
      },
      {
        color: 'red',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-red tw:hocus:text-red-contrast',
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
        class: 'tw:hocus:bg-yellow-focus',
      },
      {
        color: 'yellow',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-yellow tw:hocus:text-yellow-contrast',
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
        class: 'tw:hocus:bg-blue-focus',
      },
      {
        color: 'blue',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-blue tw:hocus:text-blue-contrast',
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
        class: 'tw:hocus:bg-green-focus',
      },
      {
        color: 'green',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-green tw:hocus:text-green-contrast',
      },
      {
        color: 'grey-light',
        outlined: false,
        class: 'tw:bg-grey-light tw:text-grey-light-contrast',
      },
      {
        color: 'grey-light',
        outlined: true,
        class: 'tw:border-grey-light tw:text-grey-light',
      },
      {
        color: 'grey-light',
        outlined: false,
        disabled: false,
        class: 'tw:hocus:bg-grey-light-focus',
      },
      {
        color: 'grey-light',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-grey-light tw:hocus:text-grey-light-contrast',
      },
      {
        color: 'grey-dark',
        outlined: false,
        class: 'tw:bg-grey-dark tw:text-grey-dark-contrast',
      },
      {
        color: 'grey-dark',
        outlined: true,
        class: 'tw:border-grey-dark tw:text-grey-dark',
      },
      {
        color: 'grey-dark',
        outlined: false,
        disabled: false,
        class: 'tw:hocus:bg-grey-dark-focus',
      },
      {
        color: 'grey-dark',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-grey-dark tw:hocus:text-grey-dark-contrast',
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
        class: 'tw:hocus:bg-black-focus',
      },
      {
        color: 'black',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-black tw:hocus:text-black-contrast',
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
        class: 'tw:hocus:bg-white-focus',
      },
      {
        color: 'white',
        outlined: true,
        disabled: false,
        class: 'tw:hocus:bg-white tw:hocus:text-white-contrast',
      },
    ],
  });

  const classes = twMerge(button({ color, outlined, disabled }), className);

  return (
    <Component className={classes} disabled={disabled} {...rest}>
      {children}
    </Component>
  );
}

Button.displayName = 'Button';