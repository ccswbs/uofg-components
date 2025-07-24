'use client';

import { faCheck } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListboxOption, ListboxOptionProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type SelectOptionProps<TTag extends ElementType, TType> = ListboxOptionProps<TTag, TType> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function SelectOption<TTag extends ElementType, TType>({
  children,
  className,
  ...rest
}: SelectOptionProps<TTag, TType>) {
  const classes = tv({
    slots: {
      option: [
        'uofg-select-option',
        'relative',
        'cursor-pointer',
        'select-none',
        'border-b',
        'border-grey-dark',
        'px-4',
        'py-2',
        'text-gray-900',
        'transition-colors',
        'last:border-b-0',
        'hover:bg-grey-light',
        'focus:bg-grey-light',
        'focus:outline-none',
        'ui-active:bg-grey-light',
        'gap-2',
      ],
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
    <ListboxOption {...rest} className={twMerge(option(), className)}>
      {({ focus, selected, ...rest }) => (
        <div className={wrapper()}>
          <span className={content()}>
            {typeof children === 'function' ? children({ focus, selected, ...rest }) : children}
          </span>

          <FontAwesomeIcon icon={faCheck} className={icon({ selected })} />
        </div>
      )}
    </ListboxOption>
  );
}

SelectOption.displayName = 'SelectOptions';
