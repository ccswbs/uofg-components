'use client';

import { faMinusCircle, faPlusCircle } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Input, Label } from '@headlessui/react';
import { ComponentPropsWithoutRef, FormEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { clamp } from '../../utils/math-utils';

export type NumberInputProps = PropsWithChildren<
  {
    /** Additional classes to apply to the input * */
    className?: string;
    /** Sets the initial value of the input */
    initialValue?: number;
    /** The value of the input */
    value?: number;
    /** Placeholder text to show in the input when it is empty */
    placeholder?: string;
    /** The minimum number allowed for this input */
    min?: number;
    /** The maximum number allowed for this input */
    max?: number;
    /** Callback to call when the input changes */
    onInput?: (value: number, e?: FormEvent<HTMLInputElement>) => void;
    /** The colour of the input's control buttons */
    color?: 'red' | 'yellow' | 'blue' | 'green';
  } & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onInput'>
>;

export function NumberInput({
  initialValue,
  color = 'yellow',
  placeholder = '',
  onInput,
  children,
  className,
  min,
  max,
  value,
  ...rest
}: NumberInputProps) {
  const [num, setNum] = useState(initialValue ?? 0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNum(value ?? NaN);
  }, [value]);

  const update = (num: number) => {
    const clamped = clamp(num, min ?? -Infinity, max ?? Infinity);
    setNum(clamped);
    if (ref.current) {
      ref.current.value = clamped.toString();
      onInput?.(clamped);
    }
  };

  const {
    base,
    wrapper,
    input: inputClasses,
    container,
    control,
  } = tv({
    slots: {
      base: 'flex flex-col gap-0.5',
      wrapper:
        'text-input flex rounded-md border border-grey-light bg-white px-2 py-2 transition-colors focus-within:border-blue focus:outline-none',
      container: 'grid grid-cols-[2rem_1fr_2rem] items-center justify-center justify-items-center gap-2',
      input:
        'col-2 w-full flex-1 [appearance:textfield] bg-white focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
      control:
        'relative flex cursor-pointer items-center justify-center rounded-full text-xl shadow transition-colors before:absolute before:-z-1 before:h-2/3 before:w-2/3',
    },
    variants: {
      color: {
        red: {
          control: 'text-red before:bg-red-contrast hocus-visible:text-red-focus',
        },
        yellow: {
          control: 'text-yellow before:bg-yellow-contrast hocus-visible:text-yellow-focus',
        },
        blue: {
          control: 'text-blue before:bg-blue-contrast hocus-visible:text-blue-focus',
        },
        green: {
          control: 'text-green before:bg-green-contrast hocus-visible:text-green-focus',
        },
      },
    },
  })({
    color: color ?? 'yellow',
  });

  return (
    <Field className={`uofg-number-input-field ${twMerge(base(), className)}`}>
      {children && <Label className="uofg-number-input-label">{children}</Label>}

      <div className={`uofg-number-input-container ${container()}`}>
        <div className={`uofg-number-input-wrapper ${wrapper()}`}>
          <Input
            {...rest}
            ref={ref}
            value={num}
            type="number"
            min={min}
            max={max}
            placeholder={placeholder}
            onInput={e => {
              const value = Number.parseFloat((e?.target as HTMLInputElement)?.value ?? '');
              setNum(value);
              onInput?.(value, e);
            }}
            className={`uofg-number-input ${inputClasses()}`}
          />
        </div>

        <button
          className={`uofg-number-input-subtract col-1 row-1 ${control()}`}
          onClick={() => {
            update((num ? num : 0) - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
          <span className="sr-only">Subtract</span>
        </button>
        <button
          className={`uofg-number-input-add col-3 row-1 ${control()}`}
          onClick={() => {
            update((num ? num : 0) + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
          <span className="sr-only">Add</span>
        </button>
      </div>
    </Field>
  );
}
