import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../react-components/src/components/button/button';

const config: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
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
