'use client';

import { Combobox, ComboboxProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type AutocompleteProps<TValue, TMultiple extends boolean, TTag extends ElementType> = ComboboxProps<
  TValue,
  TMultiple,
  TTag
> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function Autocomplete<TValue, TMultiple extends boolean, TTag extends ElementType>({
  children,
  className,
  value,
  ...rest
}: AutocompleteProps<TValue, TMultiple, TTag>) {
  return (
    <Combobox {...rest} value={value} className={twMerge('uofg-autocomplete group relative w-full', className)}>
      {children}
    </Combobox>
  );
}

Autocomplete.displayName = 'Autocomplete';

export { AutocompleteButton } from './autocomplete-button';
export { AutocompleteOption } from './autocomplete-option';
export { AutocompleteOptions } from './autocomplete-options';
