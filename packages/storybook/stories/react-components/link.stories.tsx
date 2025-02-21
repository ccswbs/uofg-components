import { Meta, StoryObj } from '@storybook/react';
import { Link } from '@uoguelph/react-components';

const config: Meta<typeof Link> = {
  title: 'React Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      name: 'as',
      description:
        'The HTMLElement/React component to render the link as. Link can be rendered as a anchor tag, or any component that acts as a link.',
      table: {
        type: { summary: "ElementType<{ href?: string }, 'a'>" },
        defaultValue: { summary: "'a'" },
      },
      control: false,
    },
    color: {
      name: 'color',
      description: 'The color of the link',
      table: {
        type: { summary: "'base' | 'light' | 'dark'" },
        defaultValue: { summary: "'base'" },
      },
      control: {
        type: 'select',
      },
      options: ['base', 'light', 'dark'],
    },
    className: {
      name: 'className',
      description: 'Classes to apply to the link',
      table: { type: { summary: 'string?' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the link',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  args: {
    children: 'Example Link',
    href: '/example-page',
  },
};
