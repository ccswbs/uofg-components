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
      base: 'uog:flex uog:flex-col uog:gap-0.5',
      wrapper:
        'uog:text-input uog:border-gray-300 uog:flex uog:rounded-md uog:border uog:px-4 uog:py-2 uog:transition-colors uog:focus-within:border-blue uog:focus:outline-none',
      input: 'uog:flex-1 uog:focus:outline-none',
      clearButton: 'uog:rounded-full uog:text-xl',
    },
    variants: {
      empty: {
        true: {
          clearButton: 'uog:pointer-events-none uog:invisible',
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
            // We need to use the native setter to update the value, so that React correctly dispatches the change event
            const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;

            setter?.call(ref.current, '');
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
