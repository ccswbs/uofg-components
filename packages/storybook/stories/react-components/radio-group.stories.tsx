import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import { Radio, RadioGroup } from '../../../react-components/src/components/radio-group/radio-group';

const config: Meta<typeof RadioGroup> = {
  title: 'React Components/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    Radio: Radio as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
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

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ ...args }) => (
    <RadioGroup {...args}>
      <Radio value="option-1">Option 1</Radio>
      <Radio value="option-2">Option 2</Radio>
      <Radio value="option-3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Inline: Story = {
  args: {
    inline: true,
  },
  render: ({ ...args }) => (
    <RadioGroup {...args}>
      <Radio value="option-1">Option 1</Radio>
      <Radio value="option-2">Option 2</Radio>
      <Radio value="option-3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: ({ ...args }) => (
    <RadioGroup {...args}>
      <Radio value="option-1">Option 1</Radio>
      <Radio value="option-2" selected>
        Option 2
      </Radio>
      <Radio value="option-3">Option 3</Radio>
    </RadioGroup>
  ),
};
