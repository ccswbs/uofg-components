import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { useState } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteOption,
  AutocompleteOptions,
} from '../../../react-components/src/components/autocomplete/autocomplete';

const config: Meta<typeof Autocomplete> = {
  title: 'React Components/Autocomplete',
  component: Autocomplete,
  subcomponents: {
    AutocompleteInput: AutocompleteInput as ComponentType<unknown>,
    AutocompleteOptions: AutocompleteOptions as ComponentType<unknown>,
    AutocompleteOption: AutocompleteOption as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
      description: {
        component:
          'The Autocomplete component is a styled wrapper of the @headlessui/react Combobox component. For more information, read the documentation at https://headlessui.com/react/combobox',
      },
    },
    'in-development': true,
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: fn(),
  },
};

export default config;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  render: ({ ...args }) => {
    const values = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selected, setSelected] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('');

    const filtered = query === '' ? values : values.filter(option => option.includes(query));

    return (
      <Autocomplete
        {...args}
        defaultValue={undefined}
        multiple={false}
        value={selected}
        onClose={() => setQuery('')}
        onChange={value => setSelected(value)}
        virtual={null}
        immediate
      >
        <AutocompleteInput
          displayValue={(selected: string) => selected ?? ''}
          onChange={event => setQuery(event.target.value)}
        />

        <AutocompleteOptions anchor="bottom">
          {filtered.map(value => (
            <AutocompleteOption value={value}>{value}</AutocompleteOption>
          ))}
        </AutocompleteOptions>
      </Autocomplete>
    );
  },
};
