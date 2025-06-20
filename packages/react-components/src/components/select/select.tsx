import { Listbox, ListboxProps } from '@headlessui/react';

export function Select({ children, ...rest }: ListboxProps<'div'>) {
  return (
    <Listbox className="uofg-select uog:group uog:relative uog:w-full" {...rest} as="div">
      {children}
    </Listbox>
  );
}

Select.displayName = 'Select';

export { SelectButton } from './select-button';
export { SelectOption } from './select-option';
export { SelectOptions } from './select-options';
