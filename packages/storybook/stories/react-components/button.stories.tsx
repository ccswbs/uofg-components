import { Button } from '../../../react-components/src/components/button/button';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
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
        'The HTMLElement/React component to render the Button as. Button can be rendered as a button, or any component that acts as a link.',
      table: {
        type: { summary: "ElementType<{ href?: string }, 'a'> | 'button'" },
        defaultValue: { summary: "'button'" },
      },
      control: false,
    },
    color: {
      name: 'color',
      description: 'The color of the button',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white'" },
        defaultValue: { summary: "'red'" },
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue', 'green', 'light-grey', 'dark-grey', 'black', 'white'],
    },
    outlined: {
      name: 'outlined',
      description: 'Whether the button uses an outlined style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the button is disabled, should be set to false when the button is acting as a link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    className: {
      name: 'className',
      description: 'Classes to apply to the button',
      table: { type: { summary: 'string?' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the button',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Button>;

// Red Button Stories
export const Basic: Story = {
  args: {
    color: 'red',
    children: 'Example Button',
  },
};

export const Outlined: Story = {
  args: {
    color: 'red',
    outlined: true,
    children: 'Example Outlined Button',
  },
};

export const Disabled: Story = {
  args: {
    color: 'red',
    disabled: true,
    children: 'Example Disabled Button',
  },
};

export const AsALink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Example Link Button',
  },
};
