import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import {
  Blockquote,
  BlockquoteAuthor,
  BlockquoteContent,
} from '../../../react-components/src/components/blockquote/blockquote';

const config: Meta<typeof Blockquote> = {
  title: 'React Components/Blockquote',
  component: Blockquote,
  subcomponents: {
    BlockquoteContent: BlockquoteContent as ComponentType<unknown>,
    BlockquoteAuthor: BlockquoteAuthor as ComponentType<unknown>,
  },
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Blockquote>;

export const Basic: Story = {
  render: ({ ...args }) => (
    <Blockquote {...args}>
      <BlockquoteContent>
        Quis cum cupiditate adipisci dolores aliquam ullam incidunt tempore nesciunt.
      </BlockquoteContent>
    </Blockquote>
  ),
};

export const WithAuthor: Story = {
  render: ({ ...args }) => (
    <Blockquote {...args}>
      <BlockquoteContent>
        Quis cum cupiditate adipisci dolores aliquam ullam incidunt tempore nesciunt.
      </BlockquoteContent>
      <BlockquoteAuthor name="John Doe" title="Web Developer" />
    </Blockquote>
  ),
};

export const Blue: Story = {
  args: {
    color: 'blue',
  },
  render: ({ ...args }) => (
    <Blockquote {...args}>
      <BlockquoteContent>
        Quis cum cupiditate adipisci dolores aliquam ullam incidunt tempore nesciunt.
      </BlockquoteContent>
      <BlockquoteAuthor name="John Doe" title="Web Developer" />
    </Blockquote>
  ),
};
