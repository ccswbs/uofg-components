import { faXmarkCircle } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Input, Label } from '@headlessui/react';
import { ComponentPropsWithoutRef, FormEvent, PropsWithChildren, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

export type TextInputProps = PropsWithChildren<
  {
    /** Sets the initial value of the TextInput */
    initialValue?: string;
    /** The type of the input */
    type?: 'text' | 'password';
    /** Placeholder text to show in the input when it is empty */
    placeholder?: string;
    /** Callback to call when the input changes */
    onInput?: (e: FormEvent<HTMLInputElement>) => void;
  } & ComponentPropsWithoutRef<'input'>
>;

export function TextInput({
  initialValue = '',
  type = 'text',
  placeholder = '',
  onInput,
  children,
  ...rest
}: TextInputProps) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef<HTMLInputElement>(null);

  const textInput = tv({
    slots: {
      base: 'tw:flex tw:flex-col tw:gap-0.5',
      wrapper:
        'tw:text-input tw:border-gray-300 tw:flex tw:rounded-md tw:border tw:px-4 tw:py-2 tw:transition-colors tw:focus-within:border-blue tw:focus:outline-none',
      input: 'tw:flex-1 tw:focus:outline-none',
      clearButton: 'tw:rounded-full tw:text-xl',
    },
    variants: {
      empty: {
        true: {
          clearButton: 'tw:pointer-events-none tw:invisible',
        },
      },
    },
  });

  const { base, wrapper, input, clearButton } = textInput({ empty: value?.length === 0 });

  return (
    <Field className={base()}>
      {children && <Label>{children}</Label>}

      <div className={wrapper()}>
        <Input
          {...rest}
          ref={ref}
          value={value}
          type={type}
          placeholder={placeholder}
          onInput={e => {
            setValue((e?.target as HTMLInputElement)?.value);
            onInput?.(e);
          }}
          className={input()}
        />

        <button
          className={clearButton()}
          onClick={() => {
            if (!ref.current) return;

            ref.current.value = '';
            ref.current.dispatchEvent(new Event('input', { bubbles: true }));
            ref.current.focus();
          }}
        >
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
      </div>
    </Field>
  );
}
