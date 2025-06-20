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
      base: 'uog:flex uog:flex-col uog:gap-0.5',
      wrapper:
        'uog:text-input uog:border-grey-light uog:flex uog:rounded-md uog:border uog:px-2 uog:py-2 uog:transition-colors uog:focus-within:border-blue uog:focus:outline-none uog:bg-white',
      container:
        'uog:grid uog:items-center uog:justify-center uog:justify-items-center uog:grid-cols-[2rem_1fr_2rem] uog:gap-2',
      input:
        'uog:flex-1 uog:focus:outline-none uog:bg-white uog:w-full uog:[appearance:textfield] uog:[&::-webkit-outer-spin-button]:appearance-none uog:[&::-webkit-inner-spin-button]:appearance-none uog:col-2',
      control:
        'uog:flex uog:relative uog:items-center uog:justify-center uog:rounded-full uog:text-xl uog:transition-colors uog:shadow uog:cursor-pointer uog:before:absolute uog:before:-z-1 uog:before:w-2/3 uog:before:h-2/3',
    },
    variants: {
      color: {
        red: {
          control: 'uog:text-red uog:before:bg-red-contrast uog:hocus-visible:text-red-focus',
        },
        yellow: {
          control: 'uog:text-yellow uog:before:bg-yellow-contrast uog:hocus-visible:text-yellow-focus',
        },
        blue: {
          control: 'uog:text-blue uog:before:bg-blue-contrast uog:hocus-visible:text-blue-focus',
        },
        green: {
          control: 'uog:text-green uog:before:bg-green-contrast uog:hocus-visible:text-green-focus',
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
          className={`uofg-number-input-subtract uog:col-1 uog:row-1 ${control()}`}
          onClick={() => {
            update((num ? num : 0) - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
          <span className="uog:sr-only">Subtract</span>
        </button>
        <button
          className={`uofg-number-input-add uog:col-3 uog:row-1 ${control()}`}
          onClick={() => {
            update((num ? num : 0) + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
          <span className="uog:sr-only">Add</span>
        </button>
      </div>
    </Field>
  );
}
