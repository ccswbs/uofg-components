import { RadioGroup as HUIRadioGroup } from '@headlessui/react';
import { PropsWithChildren, useMemo, useState } from 'react';
import { tv } from 'tailwind-variants';
import { RadioContext } from './radio-context';

export type RadioGroupProps<T> = PropsWithChildren<{
  /** The name of the radio group. This is used for when the radio group is part of a form. */
  name?: string;
  /** Whether the radios should be displayed inline or not. */
  inline?: boolean;
  /** The callback to call when the selected radio changes. */
  onChange?: (value: T | null) => void;
}>;

export function RadioGroup<T>({ name, inline = false, onChange, children }: RadioGroupProps<T>) {
  const [selected, setSelected] = useState<T | null>(null);
  const contextValue = useMemo(() => ({ setSelected }), [setSelected]);

  const radio = tv({
    slots: {
      base: 'uog:flex uog:gap-2',
    },
    variants: {
      inline: {
        false: {
          base: 'uog:flex-col',
        },
      },
    },
  });

  const { base } = radio({ inline });

  return (
    <HUIRadioGroup
      name={name}
      value={selected}
      onChange={value => {
        setSelected(value);
        onChange?.(value);
      }}
      className={`uofg-radio-group ${base()}`}
    >
      <RadioContext.Provider value={contextValue}>{children}</RadioContext.Provider>
    </HUIRadioGroup>
  );
}

RadioGroup.displayName = 'RadioGroup';

export { Radio } from './radio';
