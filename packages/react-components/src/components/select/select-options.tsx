'use client';

import { ListboxOptions, ListboxOptionsProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectOptionsProps<T extends ElementType> = ListboxOptionsProps<T> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function SelectOptions<T extends ElementType>({ children, className, ...rest }: SelectOptionsProps<T>) {
  const classes = twMerge(
    'z-10',
    'max-h-[20rem]',
    'w-full',
    'overflow-auto',
    'rounded-b-md',
    'border',
    'border-t-0',
    'border-grey-light',
    'bg-white',
    'shadow-md',
    'group-focus-within:border-blue',
    'group-focus-within:outline-none',
    'ui-open:border-blue',
    'md:absolute',
    'transition',
    'duration-300',
    'ease-out',
    'data-[closed]:opacity-0',
    className,
  );

  return (
    <ListboxOptions {...rest} className={classes}>
      {children}
    </ListboxOptions>
  );
}

SelectOptions.displayName = 'SelectOptions';
