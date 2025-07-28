'use client';

import { ComboboxInput, ComboboxInputProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type AutocompleteProps<TTag extends ElementType, TType> = ComboboxInputProps<TTag, TType> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteInput<TTag extends ElementType, TType>({
  children,
  className,
  defaultValue,
  ...rest
}: AutocompleteProps<TTag, TType>) {
  return (
    <ComboboxInput
      {...rest}
      defaultValue={defaultValue}
      className={twMerge('uofg-autocomplete-input h-6 flex-1 focus:outline-hidden', className)}
    >
      {children}
    </ComboboxInput>
  );
}

AutocompleteInput.displayName = 'AutocompleteInput';
