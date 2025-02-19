import { Blockquote } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Blockquote> = {
  title: 'React Components/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      name: 'color',
      description: 'The color of the quotation marks in the blockquote',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue'" },
        defaultValue: { summary: "'red'" },
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue'],
    },
    children: {
      name: 'children',
      description: 'The content in the blockquote',
      table: {
        type: { summary: "React.ReactNode?" }
      },
      control: false,
    }
  },
};

export default config;

type Story = StoryObj<typeof Blockquote>;

export const Basic: Story = {
  args: {
    children: 'Quis cum cupiditate adipisci dolores aliquam ullam incidunt tempore nesciunt.',
    color: 'red',
  },
};