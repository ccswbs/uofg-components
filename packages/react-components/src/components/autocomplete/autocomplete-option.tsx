'use client';

import { faCheck } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComboboxOption, ComboboxOptionProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type AutocompleteOptionProps<TTag extends ElementType, TType> = ComboboxOptionProps<TTag, TType> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function AutocompleteOption<TTag extends ElementType, TType>({
  children,
  className,
  ...rest
}: AutocompleteOptionProps<TTag, TType>) {
  const classes = tv({
    slots: {
      option:
        'uofg-autocomplete-option ui-active:bg-grey-light relative cursor-pointer gap-2 border-b border-grey-dark px-4 py-2 text-gray-900 transition-colors select-none last:border-b-0 hover:bg-grey-light focus:bg-grey-light focus:outline-none',
      icon: 'h-5 w-5 text-blue',
      wrapper: 'flex items-center',
      content: 'flex-1',
    },
    variants: {
      selected: {
        true: {
          icon: 'visible',
        },
        false: {
          icon: 'invisible',
        },
      },
    },
  });

  const { option, icon, wrapper, content } = classes();

  return (
    <ComboboxOption {...rest} className={twMerge(option(), className)}>
      {({ focus, selected, ...rest }) => (
        <div className={wrapper()}>
          <span className={content()}>
            {typeof children === 'function' ? children({ focus, selected, ...rest }) : children}
          </span>

          <FontAwesomeIcon icon={faCheck} className={icon({ selected })} />
        </div>
      )}
    </ComboboxOption>
  );
}

AutocompleteOption.displayName = 'AutocompleteOption';
