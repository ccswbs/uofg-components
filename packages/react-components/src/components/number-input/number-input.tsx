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
  } & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onInput'>
>;

export function NumberInput({
  initialValue,
  placeholder = '',
  onInput,
  children,
  className,
  min,
  max,
  value,
  ...rest
}: NumberInputProps) {
  const [num, setNum] = useState(initialValue);
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
      container: 'uog:grid uog:items-center uog:justify-center uog:justify-items-center uog:grid-cols-3 uog:gap-1',
      input:
        'uog:flex-1 uog:focus:outline-none uog:bg-white uog:w-full uog:[appearance:textfield] uog:[&::-webkit-outer-spin-button]:appearance-none uog:[&::-webkit-inner-spin-button]:appearance-none uog:col-2',
      control: 'uog:flex uog:items-center uog:justify-center uog:rounded-full uog:text-yellow uog:bg-black uog:text-xl',
    },
  })();

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
            update((num ?? 0) - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
          <span className="uog:sr-only">Subtract</span>
        </button>
        <button
          className={`uofg-number-input-add uog:col-3 uog:row-1 ${control()}`}
          onClick={() => {
            update((num ?? 0) + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
          <span className="uog:sr-only">Add</span>
        </button>
      </div>
    </Field>
  );
}
