import { Field, Radio as HUIRadio, Label } from '@headlessui/react';
import { Fragment, PropsWithChildren, useContext, useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { RadioContext } from './radio-context';

export type RadioProps<T> = PropsWithChildren<{
  /**
   *  Whether the radio is selected or not initially.
   */
  selected?: boolean;
  /**
   * The value of the radio.
   */
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
      field: 'tw:flex tw:items-center tw:gap-2',
      radio:
        'tw:block tw:aspect-square tw:rounded-full tw:border tw:border-blue tw:p-1.5 tw:focus-visible:ring-2 tw:focus-visible:ring-blue tw:focus-visible:ring-offset-2',
      circle: 'tw:block tw:h-2 tw:w-2 tw:rounded-full',
    },
    variants: {
      checked: {
        true: {
          radio: 'tw:bg-blue',
          circle: 'tw:bg-white',
        },
        false: {
          circle: 'tw:bg-transparent',
        },
      },
    },
  });

  const { field, radio: radioClasses, circle } = radio();

  return (
    <Field className={field()}>
      <HUIRadio value={value} as={Fragment}>
        {({ checked }) => (
          <span className={radioClasses({ checked })}>
            <span className={circle({ checked })} />
          </span>
        )}
      </HUIRadio>
      <Label>{children}</Label>
    </Field>
  );
}
