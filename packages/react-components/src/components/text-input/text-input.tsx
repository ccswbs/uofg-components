import { faXmarkCircle } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Input, Label } from '@headlessui/react';
import { ComponentPropsWithoutRef, FormEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type TextInputProps = PropsWithChildren<
  {
    /** Additional classes to apply to the input * */
    className?: string;
    /** Sets the initial value of the TextInput */
    initialValue?: string;
    /** The type of the input */
    type?: 'text' | 'password';
    /** The value of the input */
    value?: string;
    /** Placeholder text to show in the input when it is empty */
    placeholder?: string;
    /** Callback to call when the input changes */
    onInput?: (e: FormEvent<HTMLInputElement>) => void;
    /** Whether to render a clear button in the input */
    hideClear?: boolean;
  } & ComponentPropsWithoutRef<'input'>
>;

export function TextInput({
  initialValue = '',
  type = 'text',
  placeholder = '',
  onInput,
  children,
  className,
  hideClear,
  value,
  ...rest
}: TextInputProps) {
  const [input, setInput] = useState(initialValue);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInput(value ?? '');
  }, [value]);

  const textInput = tv({
    slots: {
      base: 'uog:flex uog:flex-col uog:gap-0.5',
      wrapper:
        'uog:text-input uog:border-grey-light uog:flex uog:rounded-md uog:border uog:px-4 uog:py-2 uog:transition-colors uog:focus-within:border-blue uog:focus:outline-none uog:bg-white',
      input: 'uog:flex-1 uog:focus:outline-none uog:bg-white',
      clearButton: 'uog:rounded-full uog:text-xl',
    },
    variants: {
      empty: {
        true: {
          clearButton: 'uog:pointer-events-none uog:invisible',
        },
      },
      hide: {
        true: {
          clearButton: 'uog:pointer-events-none uog:invisible',
        },
      },
    },
  });

  const { base, wrapper, input: inputClasses, clearButton } = textInput({ empty: input?.length === 0 });

  return (
    <Field className={`uofg-text-input-field ${twMerge(base(), className)}`}>
      {children && <Label className="uofg-text-input-label">{children}</Label>}

      <div className={`uofg-text-input-wrapper ${wrapper()}`}>
        <Input
          {...rest}
          ref={ref}
          value={input}
          type={type}
          placeholder={placeholder}
          onInput={e => {
            setInput((e?.target as HTMLInputElement)?.value);
            onInput?.(e);
          }}
          className={`uofg-text-input ${inputClasses()}`}
        />

        <button
          className={`uofg-text-input-clear-button ${clearButton({ hide: hideClear })}`}
          onClick={() => {
            if (!ref.current) return;
            // We need to use the native setter to update the value so that React correctly dispatches the change event
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
