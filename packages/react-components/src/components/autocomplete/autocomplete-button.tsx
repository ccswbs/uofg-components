'use client';

import { faChevronDown } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComboboxButton, ComboboxButtonProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type AutocompleteButtonProps<TTag extends ElementType> = ComboboxButtonProps<TTag> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteButton<TTag extends ElementType>({
  children,
  className,
  ...rest
}: AutocompleteButtonProps<TTag>) {
  const classes = tv({
    slots: {
      button:
        'uofg-autocomplete-input ui-open:rounded-b-none ui-open:border-blue flex h-6 w-full flex-1 items-center justify-between gap-2 rounded-md border border-grey-light bg-white px-4 py-2.5 shadow-sm transition-colors group-focus-within:border-blue group-focus-within:outline-none focus:outline-hidden',
      icon: 'ui-open:rotate-180 h-5 w-5 text-body-copy transition-transform',
    },
  });

  const { button, icon } = classes();

  return (
    <ComboboxButton {...rest} className={twMerge(button(), className)}>
      {bag => {
        return (
          <>
            {typeof children === 'function' ? children(bag) : children}
            <FontAwesomeIcon className={icon()} icon={faChevronDown} />
          </>
        );
      }}
    </ComboboxButton>
  );
}

AutocompleteButton.displayName = 'AutocompleteButton';
