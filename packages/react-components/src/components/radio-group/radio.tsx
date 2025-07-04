'use client';

import { Field, Radio as HUIRadio, Label } from '@headlessui/react';
import { Fragment, PropsWithChildren, useContext, useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { RadioContext } from './radio-context';

export type RadioProps<T> = PropsWithChildren<{
  /** Whether the radio is selected or not initially. */
  selected?: boolean;
  /** The value of the radio. */
  value: T;
}>;

export function Radio<T>({ selected, children, value }: RadioProps<T>) {
  const context = useContext(RadioContext);

  useEffect(() => {
    if (selected) {
      // Update the radio group state with the selected value, this allows for setting an initially selected value
      context?.setSelected(value);
    }
  }, [context, selected, value]);

  const radio = tv({
    slots: {
      field: 'flex items-center gap-2',
      radio:
        'block aspect-square rounded-full border border-blue p-1.5 focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2',
      circle: 'block h-2 w-2 rounded-full',
    },
    variants: {
      checked: {
        true: {
          radio: 'bg-blue',
          circle: 'bg-white',
        },
        false: {
          circle: 'bg-transparent',
        },
      },
    },
  });

  const { field, radio: radioClasses, circle } = radio();

  return (
    <Field className={`uofg-radio-field ${field()}`}>
      <HUIRadio value={value} as={Fragment}>
        {({ checked }) => (
          <span className={`uofg-radio ${radioClasses({ checked })}`}>
            <span className={`uofg-radio-circle ${circle({ checked })}`} />
          </span>
        )}
      </HUIRadio>
      <Label className="uofg-radio-label">{children}</Label>
    </Field>
  );
}
