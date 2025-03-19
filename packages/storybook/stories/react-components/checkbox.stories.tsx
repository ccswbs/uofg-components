import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../../../react-components/src/components/checkbox/checkbox';

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
};

export default config;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    disabled: false,
    checked: false,
  },
};

export const WithLabel: Story = {
  args: {
    disabled: false,
    checked: false,
    label: 'Example checkbox',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    disabled: false,
    checked: false,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const CheckedByDefault: Story = {
  args: {
    disabled: false,
    checked: true,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const DisabledAndUnchecked: Story = {
  args: {
    disabled: true,
    checked: false,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};

export const DisabledAndChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Example checkbox',
    description: 'This is a checkbox',
  },
};
