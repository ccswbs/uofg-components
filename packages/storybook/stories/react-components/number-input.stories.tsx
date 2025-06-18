import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { NumberInput } from '../../../react-components/src/components/number-input/number-input';

const config: Meta<typeof NumberInput> = {
  title: 'React Components/NumberInput',
  component: NumberInput,
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
  args: {
    onInput: fn(),
  },
};

export default config;

type Story = StoryObj<typeof NumberInput>;

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
    <NumberInput {...args}>
      <span>Example Label</span>
    </NumberInput>
  ),
};
