'use client';

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
   * @default 'yellow'
   */
  color?: 'yellow' | 'blue' | 'green' | 'black' | 'white';
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
  color = 'yellow',
  disabled = false,
  onChange,
  ...rest
}: CheckboxProps) {
  const [enabled, setEnabled] = useState(checked);

  const checkbox = tv({
    slots: {
      base: 'flex cursor-pointer flex-col gap-0.5',
      container: 'flex items-center gap-2',
      box: 'group flex size-4 items-center justify-center rounded border bg-white p-3 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      check: 'group-ui-checked:opacity-100 user-select-none h-5 w-5 opacity-0 transition-opacity',
      label: 'text-body-copy',
      description: 'text-sm text-grey-dark',
    },
    variants: {
      color: {
        yellow: {
          box: 'ui-checked:bg-yellow focus-visible:ring-yellow',
          check: 'text-yellow-contrast',
        },
        blue: {
          box: 'ui-checked:bg-blue focus-visible:ring-blue',
          check: 'text-blue-contrast',
        },
        green: {
          box: 'ui-checked:bg-green focus-visible:ring-green',
          check: 'text-green-contrast',
        },
        black: {
          box: 'ui-checked:bg-black focus-visible:ring-black',
          check: 'text-black-contrast',
        },
        white: {
          box: 'ui-checked:bg-white focus-visible:ring-white',
          check: 'text-white-contrast',
        },
      },
      disabled: {
        true: {
          base: 'opacity-60',
          label: 'text-grey-dark',
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
    <Field className={`uofg-checkbox-field ${base()}`}>
      <div className={`uofg-checkbox-container ${container()}`}>
        <HUICheckbox
          checked={enabled}
          onChange={value => {
            setEnabled(value);
            onChange?.(value);
          }}
          disabled={disabled}
          className={`uofg-checkbox ${box()}`}
          {...rest}
        >
          <FontAwesomeIcon className={`uofg-checkbox-icon ${check()}`} icon={faCheck} />
        </HUICheckbox>
        {label && <Label className={`uofg-checkbox-label ${labelClasses()}`}>{label}</Label>}
      </div>

      {description && (
        <Description className={`uofg-checkbox-description ${descriptionClasses()}`}>{description}</Description>
      )}
    </Field>
  );
}

Checkbox.displayName = 'Checkbox';
