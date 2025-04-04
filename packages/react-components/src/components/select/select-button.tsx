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
        'ui-open:rounded-b-none',
        'ui-open:border-blue',
        'flex',
        'w-full',
        'items-center',
        'justify-between',
        'rounded-md',
        'border',
        'border-gray-300',
        'bg-white',
        'px-4',
        'py-2',
        'shadow-sm',
        'transition-colors',
        'group-focus-within:border-blue',
        'group-focus-within:outline-none',
      ],
      icon: 'ui-open:rotate-180 h-5 w-5 text-gray-400 transition-transform',
    },
  });

  const { button, icon } = classes();

  return (
    <ListboxButton {...rest} className={twMerge(button(), className)}>
      {bag => {
        return (
          <>
            {typeof children === 'function' ? children(bag) : children}
            <FontAwesomeIcon className={icon()} icon={faChevronDown} />
          </>
        );
      }}
    </ListboxButton>
  );
}

SelectButton.displayName = 'SelectButton';
