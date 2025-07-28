'use client';

import { ComboboxOptions, ComboboxOptionsProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type AutocompleteOptionsProps<TTag extends ElementType> = ComboboxOptionsProps<TTag> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteOptions<TTag extends ElementType>({
  children,
  className,
  ...rest
}: AutocompleteOptionsProps<TTag>) {
  const classes = twMerge(
    'uofg-autocomplete-options',
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
    <ComboboxOptions {...rest} className={classes}>
      {children}
    </ComboboxOptions>
  );
}

AutocompleteOptions.displayName = 'AutocompleteOptions';
