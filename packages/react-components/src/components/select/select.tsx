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
  as,
  ...rest
}: SelectProps<TTag, TType, TActualType>) {
  return (
    <Listbox {...rest} value={value} className={twMerge('uofg-select group relative w-full', className)} as="div">
      {children}
    </Listbox>
  );
}

Select.displayName = 'Select';

export { SelectButton } from './select-button';
export { SelectOption } from './select-option';
export { SelectOptions } from './select-options';
