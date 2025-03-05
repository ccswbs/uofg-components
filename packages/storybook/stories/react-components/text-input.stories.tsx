import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from '../../../react-components/src/components/text-input/text-input';

const config: Meta<typeof TextInput> = {
  title: 'React Components/TextInput',
  component: TextInput,
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

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Example Placeholder',
  },
};

export const WithLabel: Story = {
  render: ({ ...args }) => (
    <TextInput {...args}>
      <span>Example Label</span>
    </TextInput>
  ),
};
