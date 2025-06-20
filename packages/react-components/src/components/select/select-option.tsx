import { faCheck } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListboxOption, ListboxOptionProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type SelectOptionProps<T extends ElementType> = ListboxOptionProps<T> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function SelectOption<T extends ElementType>({ children, className, ...rest }: SelectOptionProps<T>) {
  const classes = tv({
    slots: {
      option: [
        'uofg-select-option',
        'uog:relative',
        'uog:cursor-pointer',
        'uog:select-none',
        'uog:border-b',
        'uog:border-grey-dark',
        'uog:px-4',
        'uog:py-2',
        'uog:text-gray-900',
        'uog:transition-colors',
        'uog:last:border-b-0',
        'uog:hover:bg-grey-light',
        'uog:focus:bg-grey-light',
        'uog:focus:outline-none',
        'uog:ui-active:bg-grey-light',
        'uog:gap-2',
      ],
      icon: 'uog:h-5 uog:w-5 uog:text-blue',
      wrapper: 'uog:flex uog:items-center',
      content: 'uog:flex-1',
    },
    variants: {
      selected: {
        true: {
          icon: 'uog:visible',
        },
        false: {
          icon: 'uog:invisible',
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
