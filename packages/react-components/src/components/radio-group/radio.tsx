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
      field: 'uog:flex uog:items-center uog:gap-2',
      radio:
        'uog:block uog:aspect-square uog:rounded-full uog:border uog:border-blue uog:p-1.5 uog:focus-visible:ring-2 uog:focus-visible:ring-blue uog:focus-visible:ring-offset-2',
      circle: 'uog:block uog:h-2 uog:w-2 uog:rounded-full',
    },
    variants: {
      checked: {
        true: {
          radio: 'uog:bg-blue',
          circle: 'uog:bg-white',
        },
        false: {
          circle: 'uog:bg-transparent',
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
