'use client';

import { faChevronDown } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListboxButton, ListboxButtonProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type SelectButtonProps<T extends ElementType> = ListboxButtonProps<T> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function SelectButton<T extends ElementType>({ children, className, ...rest }: SelectButtonProps<T>) {
  const classes = tv({
    slots: {
      button: [
        'uofg-select-button',
        'uog:ui-open:rounded-b-none',
        'uog:ui-open:border-blue',
        'uog:flex',
        'uog:w-full',
        'uog:items-center',
        'uog:justify-between',
        'uog:rounded-md',
        'uog:border',
        'uog:border-grey-light',
        'uog:bg-white',
        'uog:px-4',
        'uog:py-2',
        'uog:shadow-sm',
        'uog:transition-colors',
        'uog:group-focus-within:border-blue',
        'uog:group-focus-within:outline-none',
        'uog:gap-2',
      ],
      icon: 'uog:ui-open:rotate-180 uog:h-5 uog:w-5 uog:text-body-copy uog:transition-transform',
    },
  });

  const { button, icon } = classes();

  return (
    <ListboxButton {...rest} className={twMerge(button(), className)}>
      {bag => {
        return (
          <>
            {typeof children === 'function' ? children(bag) : <span>{children}</span>}
            <FontAwesomeIcon className={icon()} icon={faChevronDown} />
          </>
        );
      }}
    </ListboxButton>
  );
}

SelectButton.displayName = 'SelectButton';
