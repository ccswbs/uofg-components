import { ListboxOptions, ListboxOptionsProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectOptionsProps<T extends ElementType> = ListboxOptionsProps<T> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function SelectOptions<T extends ElementType>({ children, className, ...rest }: SelectOptionsProps<T>) {
  const classes = twMerge(
    'uog:z-10',
    'uog:max-h-[20rem]',
    'uog:w-full',
    'uog:overflow-auto',
    'uog:rounded-b-md',
    'uog:border',
    'uog:border-t-0',
    'uog:border-gray-300',
    'uog:bg-white',
    'uog:shadow-md',
    'uog:group-focus-within:border-blue',
    'uog:group-focus-within:outline-none',
    'uog:ui-open:border-blue',
    'uog:md:absolute',
    'uog:transition',
    'uog:duration-300',
    'uog:ease-out',
    'uog:data-[closed]:opacity-0',
    className,
  );

  return (
    <ListboxOptions {...rest} className={classes}>
      {children}
    </ListboxOptions>
  );
}

SelectOptions.displayName = 'SelectOptions';
