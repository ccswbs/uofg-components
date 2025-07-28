'use client';

import { ComboboxInput, ComboboxInputProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type AutocompleteInputProps<TTag extends ElementType> = ComboboxInputProps<TTag> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteInput<TTag extends ElementType>({
  children,
  className,
  defaultValue,
  ...rest
}: AutocompleteInputProps<TTag>) {
  return (
    <ComboboxInput
      {...rest}
      defaultValue={defaultValue}
      className={twMerge(
        'uofg-autocomplete-input ui-open:rounded-b-none ui-open:border-blue flex w-full items-center justify-between gap-2 rounded-md border border-grey-light bg-white px-4 py-2.5 shadow-sm transition-colors group-focus-within:border-blue group-focus-within:outline-none',
        className,
      )}
    >
      {children}
    </ComboboxInput>
  );
}

AutocompleteInput.displayName = 'AutocompleteInput';
