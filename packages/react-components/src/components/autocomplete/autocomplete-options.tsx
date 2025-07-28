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
    'uofg-autocomplete-options ui-open:border-blue z-10 max-h-[20rem] w-(--input-width) overflow-auto rounded-b-md border border-t-0 border-grey-light bg-white shadow-md transition duration-300 ease-out group-focus-within:border-blue group-focus-within:outline-none data-[closed]:opacity-0 md:absolute',
    className,
  );

  return (
    <ComboboxOptions {...rest} className={classes}>
      {children}
    </ComboboxOptions>
  );
}

AutocompleteOptions.displayName = 'AutocompleteOptions';
