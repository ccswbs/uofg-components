'use client';

import { Listbox, ListboxProps } from '@headlessui/react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps<TTag extends ElementType, TType, TActualType> = ListboxProps<TTag, TType, TActualType> & {
  /** Additional classes to apply to the component. */
  className?: string;
};

export function Select<TTag extends ElementType, TType, TActualType>({
  children,
  className,
  value,
  ...rest
}: SelectProps<TTag, TType, TActualType>) {
  return (
    <Listbox value={value} className={twMerge('uofg-select group relative w-full', className)} {...rest}>
      {children}
    </Listbox>
  );
}

Select.displayName = 'Select';

export { SelectButton } from './select-button';
export { SelectOption } from './select-option';
export { SelectOptions } from './select-options';
