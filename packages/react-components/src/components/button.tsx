import { ElementType, FC, JSX, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type ButtonPropsBase = {
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'grey' | 'black' | 'white';
  outlined?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export type ButtonPropsAsLink = ButtonPropsBase & {
  as: ElementType<{ href: string }>;
  href?: string;
};

export type ButtonPropsAsButton = ButtonPropsBase & {
  as?: keyof JSX.IntrinsicElements['button'];
  href: undefined;
};

export const Button: FC<ButtonPropsAsLink | ButtonPropsAsButton> = ({
  as = 'button',
  color = 'red',
  outlined = false,
  href,
  children,
  className,
  disabled = false,
  type = 'button',
  onClick = () => {}, // Default to an empty function
  ...rest
}) => {
  const Tag = as;

  const button = tv({
    base: 'font-medium shadow-sm inline-flex items-center justify-center px-6 py-4 text-lg no-underline transition-colors focus:outline-none',
    variants: {
      color: {
        red: 'focus:ring-red',
        yellow: 'focus:ring-yellow',
        blue: 'focus:ring-blue',
        green: 'focus:ring-green',
        grey: 'focus:ring-grey',
        black: 'focus:ring-black',
        white: 'focus:ring-white',
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
        class: 'hocus:bg-red-focus',
      },
      {
        color: 'red',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-red hocus:text-red-contrast',
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
        class: 'hocus:bg-yellow-focus',
      },
      {
        color: 'yellow',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-yellow hocus:text-yellow-contrast',
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
        class: 'hocus:bg-blue-focus',
      },
      {
        color: 'blue',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-blue hocus:text-blue-contrast',
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
        class: 'hocus:bg-green-focus',
      },
      {
        color: 'green',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-green hocus:text-green-contrast',
      },
      {
        color: 'grey',
        outlined: false,
        class: 'bg-grey text-grey-contrast',
      },
      {
        color: 'grey',
        outlined: true,
        class: 'border-grey text-grey',
      },
      {
        color: 'grey',
        outlined: false,
        disabled: false,
        class: 'hocus:bg-grey-focus',
      },
      {
        color: 'grey',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-grey hocus:text-grey-contrast',
      },
      {
        color: 'white',
        outlined: false,
        class: 'text-white-contrast bg-white',
      },
      {
        color: 'white',
        outlined: true,
        class: 'border-white text-white',
      },
      {
        color: 'white',
        outlined: false,
        disabled: false,
        class: 'hocus:bg-grey-light',
      },
      {
        color: 'white',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-white hocus:text-black',
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
        class: 'hocus:bg-black-focus',
      },
      {
        color: 'black',
        outlined: true,
        disabled: false,
        class: 'hocus:bg-black hocus:text-black-contrast',
      },
    ],
  });

  return (
    <Tag
      {...rest}
      //@ts-expect-error it's okay if href is undefined
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={twMerge(button({ color: color, outlined: outlined, disabled: disabled }), className)}
    >
      {children}
    </Tag>
  );
};

Button.displayName = 'Button';
