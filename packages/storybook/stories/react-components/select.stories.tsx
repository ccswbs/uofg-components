import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { useState } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import {
  Select,
  SelectButton,
  SelectOption,
  SelectOptions,
} from '../../../react-components/src/components/select/select';

const config: Meta<typeof Select> = {
  title: 'React Components/Select',
  component: Select,
  subcomponents: {
    SelectButton: SelectButton as ComponentType<unknown>,
    SelectOptions: SelectOptions as ComponentType<unknown>,
    SelectOption: SelectOption as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
      description: {
        component:
          'The Select component is a styled wrapper of the @headlessui/react ListBox component. For more information, read the documentation at https://headlessui.com/react/listbox',
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

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: ({ ...args }) => {
    const values = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selected, setSelected] = useState<string | undefined>(undefined);

    return (
      <Select {...args} value={selected} onChange={setSelected}>
        <SelectButton>{selected ?? 'Select a value'}</SelectButton>
        <SelectOptions>
          {values.map(value => (
            <SelectOption value={value}>{value}</SelectOption>
          ))}
        </SelectOptions>
      </Select>
    );
  },
};
