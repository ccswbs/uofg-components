import { faCheck } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, Field, Checkbox as HUICheckbox, Label } from '@headlessui/react';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { tv } from 'tailwind-variants';

export type CheckboxProps = {
  /**
   * Whether the checkbox is checked initially
   * @default false
   */
  checked?: boolean;
  /**
   * The label for the checkbox
   */
  label?: ReactNode;
  /**
   * The description for the checkbox
   */
  description?: ReactNode;
  /**
   * The color of the checkbox
   * @default 'red'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The function to call when the checkbox is toggled
   */
  onChange?: (value: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;
/**
 * The Checkbox component is used to allow the user to select one or more options from a list of choices.
 */
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
      base: 'tw:flex tw:flex-col tw:gap-0.5 tw:cursor-pointer',
      container: 'tw:flex tw:items-center tw:gap-2',
      box: 'tw:group tw:rounded tw:flex tw:size-4 tw:items-center tw:justify-center tw:border tw:bg-white tw:p-3 tw:transition-colors tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
      check: 'tw:h-5 tw:w-5 tw:opacity-0 tw:transition-opacity tw:group-ui-checked:opacity-100 tw:user-select-none',
      label: 'tw:text-body-copy',
      description: 'tw:text-sm tw:text-dark-grey',
    },
    variants: {
      color: {
        'red': {
          box: 'tw:focus-visible:ring-red tw:ui-checked:bg-red',
          check: 'tw:text-red-contrast',
        },
        'yellow': {
          box: 'tw:focus-visible:ring-yellow tw:ui-checked:bg-yellow',
          check: 'tw:text-yellow-contrast',
        },
        'blue': {
          box: 'tw:focus-visible:ring-blue tw:ui-checked:bg-blue',
          check: 'tw:text-blue-contrast',
        },
        'green': {
          box: 'tw:focus-visible:ring-green tw:ui-checked:bg-green',
          check: 'tw:text-green-contrast',
        },
        'light-grey': {
          box: 'tw:focus-visible:ring-light-grey tw:ui-checked:bg-light-grey',
          check: 'tw:text-light-grey-contrast',
        },
        'dark-grey': {
          box: 'tw:focus-visible:ring-dark-grey tw:ui-checked:bg-dark-grey',
          check: 'tw:text-dark-grey-contrast',
        },
        'black': {
          box: 'tw:focus-visible:ring-black tw:ui-checked:bg-black',
          check: 'tw:text-black-contrast',
        },
        'white': {
          box: 'tw:focus-visible:ring-white tw:ui-checked:bg-white',
          check: 'tw:text-white-contrast',
        },
      },
      disabled: {
        true: {
          base: 'tw:opacity-60',
          label: 'tw:text-dark-grey',
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
