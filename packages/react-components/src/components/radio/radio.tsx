import { Field, Fieldset, Legend, Label, Radio as HUIRadio, RadioGroup } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { tv } from 'tailwind-variants';

export type RadioProps = {
  options: {
    selected?: boolean;
    label: string;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    value: any;
  }[];
  label?: string;
  name?: string;
  inline?: boolean;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onChange?: (value: any) => void;
};

export function Radio({ options, label, name, inline = false, onChange }: RadioProps) {
  const [selected, setSelected] = useState(options.find(option => option?.selected) ?? null);

  const radio = tv({
    slots: {
      base: 'tw:flex tw:flex-col tw:gap-0.5',
      group: 'tw:flex tw:gap-2',
      field: 'tw:flex tw:items-center tw:gap-0.5',
      radio:
        'tw:block tw:aspect-square tw:rounded-full tw:border tw:border-blue tw:p-1.5 tw:focus-visible:ring-2 tw:focus-visible:ring-blue tw:focus-visible:ring-offset-2',
      circle: 'tw:block tw:h-2 tw:w-2 tw:rounded-full',
    },
    variants: {
      inline: {
        false: {
          group: 'tw:flex-col',
        },
      },
      checked: {
        true: {
          radio: 'tw:bg-blue',
          circle: 'tw:bg-white',
        },
        false: {
          circle: 'tw:bg-transparent',
        },
      },
    },
  });

  const { base, group, field, radio: radioClasses, circle } = radio({ inline });

  return (
    <Fieldset className={base()}>
      {label && <Legend>{label}</Legend>}

      <RadioGroup
        name={name}
        by="value"
        value={selected}
        onChange={value => {
          setSelected(value);
          onChange?.(value);
        }}
        className={group()}
      >
        {options?.map((item, index) => (
          <Field className={field()} key={index}>
            <HUIRadio value={item} as={Fragment}>
              {({ checked }) => (
                <span className={radioClasses({ checked })}>
                  <span className={circle({ checked })} />
                </span>
              )}
            </HUIRadio>
            <Label>{item?.label}</Label>
          </Field>
        ))}
      </RadioGroup>
    </Fieldset>
  );
}
