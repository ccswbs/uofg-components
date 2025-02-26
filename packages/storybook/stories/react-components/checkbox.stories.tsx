import * as React from 'react';
import { Checkbox } from '../../../react-components/src/components/checkbox';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Checkbox> = {
  title: 'React Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'The background color of the checkbox when it is checked',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white'" },
        defaultValue: { summary: "'red'" },
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue', 'green', 'light-grey', 'dark-grey', 'black', 'white'],
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the Checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'checked',
      description: 'Whether the Checkbox is checked initially',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    color: 'red',
    disabled: false,
    checked: false,
  },
};

export const WithLabel: Story = {
  args: {
    color: 'red',
    disabled: false,
    checked: false,
    label: 'Example checkbox',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    color: 'red',
    disabled: false,
    checked: false,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const CheckedByDefault: Story = {
  args: {
    color: 'red',
    disabled: false,
    checked: true,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const DisabledAndUnchecked: Story = {
  args: {
    color: 'red',
    disabled: true,
    checked: false,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const DisabledAndChecked: Story = {
  args: {
    color: 'red',
    disabled: true,
    checked: true,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};
