import { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../../../react-components/src/components/link/link';

const config: Meta<typeof Link> = {
  title: 'React Components/Link',
  component: Link,
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

type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  args: {
    children: 'Example Link',
    href: '/example-page',
  },
};
