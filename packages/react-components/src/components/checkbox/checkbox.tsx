import { faCheck } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, Field, Checkbox as HUICheckbox, Label } from '@headlessui/react';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { tv } from 'tailwind-variants';

export type CheckboxProps = {
  /**
   * Whether the checkbox is checked initially
   *
   * @default false
   */
  checked?: boolean;
  /** The label for the checkbox */
  label?: ReactNode;
  /** The description for the checkbox */
  description?: ReactNode;
  /**
   * The color of the checkbox
   *
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
  /**
   * Whether the checkbox is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /** The function to call when the checkbox is toggled */
  onChange?: (value: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;
/** The Checkbox component is used to allow the user to select one or more options from a list of choices. */
export function Checkbox({
  checked = false,
  label,
  description,
  color = 'red',
  disabled = false,
  onChange,
  ...rest
}: CheckboxProps) {
  const [enabled, setEnabled] = useState(checked);

  const checkbox = tv({
    slots: {
      base: 'uog:flex uog:flex-col uog:gap-0.5 uog:cursor-pointer',
      container: 'uog:flex uog:items-center uog:gap-2',
      box: 'uog:group uog:rounded uog:flex uog:size-4 uog:items-center uog:justify-center uog:border uog:bg-white uog:p-3 uog:transition-colors uog:focus-visible:ring-2 uog:focus-visible:ring-offset-2 uog:focus-visible:outline-none',
      check:
        'uog:h-5 uog:w-5 uog:opacity-0 uog:transition-opacity uog:group-ui-checked:opacity-100 uog:user-select-none',
      label: 'uog:text-body-copy',
      description: 'uog:text-sm uog:text-dark-grey',
    },
    variants: {
      color: {
        'red': {
          box: 'uog:focus-visible:ring-red uog:ui-checked:bg-red',
          check: 'uog:text-red-contrast',
        },
        'yellow': {
          box: 'uog:focus-visible:ring-yellow uog:ui-checked:bg-yellow',
          check: 'uog:text-yellow-contrast',
        },
        'blue': {
          box: 'uog:focus-visible:ring-blue uog:ui-checked:bg-blue',
          check: 'uog:text-blue-contrast',
        },
        'green': {
          box: 'uog:focus-visible:ring-green uog:ui-checked:bg-green',
          check: 'uog:text-green-contrast',
        },
        'light-grey': {
          box: 'uog:focus-visible:ring-light-grey uog:ui-checked:bg-light-grey',
          check: 'uog:text-light-grey-contrast',
        },
        'dark-grey': {
          box: 'uog:focus-visible:ring-dark-grey uog:ui-checked:bg-dark-grey',
          check: 'uog:text-dark-grey-contrast',
        },
        'black': {
          box: 'uog:focus-visible:ring-black uog:ui-checked:bg-black',
          check: 'uog:text-black-contrast',
        },
        'white': {
          box: 'uog:focus-visible:ring-white uog:ui-checked:bg-white',
          check: 'uog:text-white-contrast',
        },
      },
      disabled: {
        true: {
          base: 'uog:opacity-60',
          label: 'uog:text-dark-grey',
        },
        false: {},
      },
    },
  });

  const {
    base,
    container,
    box,
    check,
    label: labelClasses,
    description: descriptionClasses,
  } = checkbox({ color, disabled });

  return (
    <Field className={base()}>
      <div className={container()}>
        <HUICheckbox
          checked={enabled}
          onChange={value => {
            setEnabled(value);
            onChange?.(value);
          }}
          disabled={disabled}
          className={box()}
          {...rest}
        >
          <FontAwesomeIcon className={check()} icon={faCheck} />
        </HUICheckbox>
        {label && <Label className={labelClasses()}>{label}</Label>}
      </div>

      {description && <Description className={descriptionClasses()}>{description}</Description>}
    </Field>
  );
}

Checkbox.displayName = 'Checkbox';
