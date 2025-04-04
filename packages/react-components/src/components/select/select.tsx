import { Listbox, ListboxProps } from '@headlessui/react';
import { ElementType } from 'react';

export type SelectProps<T extends ElementType> = ListboxProps<T>;

export function Select<T extends ElementType>({ children, ...rest }: SelectProps<T>) {
  return <Listbox {...rest}>{children}</Listbox>;
}

Select.displayName = 'Select';
