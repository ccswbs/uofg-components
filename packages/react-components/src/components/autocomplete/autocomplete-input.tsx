'use client';

import { faChevronDown } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComboboxInput, ComboboxInputProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type AutocompleteInputProps<TTag extends ElementType, TType> = ComboboxInputProps<TTag, TType> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteInput<TTag extends ElementType, TType>({
  children,
  className,
  defaultValue,
  ...rest
}: AutocompleteInputProps<TTag, TType>) {
  const classes = tv({
    slots: {
      button:
        'uofg-autocomplete-input ui-open:rounded-b-none ui-open:border-blue flex w-full items-center justify-between gap-2 rounded-md border border-grey-light bg-white px-4 py-2.5 shadow-sm transition-colors group-focus-within:border-blue group-focus-within:outline-none',
      icon: 'ui-open:rotate-180 absolute top-1/2 right-2 h-5 w-5 -translate-1/2 text-body-copy transition-transform',
    },
  });

  const { button, icon } = classes();

  return (
    <>
      <ComboboxInput {...rest} defaultValue={defaultValue} className={twMerge(button(), className)}>
        {children}
      </ComboboxInput>

      <FontAwesomeIcon className={icon()} icon={faChevronDown} />
    </>
  );
}

AutocompleteInput.displayName = 'AutocompleteInput';
