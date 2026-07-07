'use client';

import { RadioGroup as HUIRadioGroup } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type RadioGroupProps<T> = PropsWithChildren<{
  /** The name of the radio group. This is used for when the radio group is part of a form. */
  name?: string;
  /** Whether the radios should be displayed inline or not. */
  inline?: boolean;
  /** The value of the selected radio. */
  value: T | null;
  /**
   * The name of the attribute to use for the `value` prop of the radio inputs. This is used for when the value is an
   * object, and you want to compare values by a specific property.
   */
  by?: string;
  /** The callback to call when the selected radio changes. */
  onChange: (value: T | null) => void;
}>;

export function RadioGroup<T>({ name, inline = false, value, onChange, children }: RadioGroupProps<T>) {
  const radio = tv({
    slots: {
      base: 'flex gap-2',
    },
    variants: {
      inline: {
        false: {
          base: 'flex-col',
        },
      },
    },
  });

  const { base } = radio({ inline });

  return (
    <HUIRadioGroup name={name} value={value} onChange={onChange} className={`uofg-radio-group ${base()}`}>
      {children}
    </HUIRadioGroup>
  );
}

RadioGroup.displayName = 'RadioGroup';

export { Radio } from './radio';
