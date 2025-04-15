import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import {
  Blockquote,
  BlockquoteAuthor,
  BlockquoteAuthorLink,
  BlockquoteAuthorName,
  BlockquoteAuthorTitle,
  BlockquoteContent,
} from '../../../react-components/src/components/blockquote/blockquote';

const config: Meta<typeof Blockquote> = {
  title: 'React Components/Blockquote',
  component: Blockquote,
  subcomponents: {
    BlockquoteContent: BlockquoteContent as ComponentType<unknown>,
    BlockquoteAuthor: BlockquoteAuthor as ComponentType<unknown>,
    BlockquoteAuthorName: BlockquoteAuthorName as ComponentType<unknown>,
    BlockquoteAuthorTitle: BlockquoteAuthorTitle as ComponentType<unknown>,
    BlockquoteAuthorLink: BlockquoteAuthorLink as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
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
      <BlockquoteAuthor>
        <BlockquoteAuthorName>John Doe</BlockquoteAuthorName>
        <BlockquoteAuthorTitle>Web Developer</BlockquoteAuthorTitle>
        <BlockquoteAuthorLink href="https://example.com">Hear more from John Doe</BlockquoteAuthorLink>
      </BlockquoteAuthor>
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
      <BlockquoteAuthor>
        <BlockquoteAuthorName>John Doe</BlockquoteAuthorName>
        <BlockquoteAuthorTitle>Web Developer</BlockquoteAuthorTitle>
        <BlockquoteAuthorLink href="https://example.com">Hear more from John Doe</BlockquoteAuthorLink>
      </BlockquoteAuthor>
    </Blockquote>
  ),
};
