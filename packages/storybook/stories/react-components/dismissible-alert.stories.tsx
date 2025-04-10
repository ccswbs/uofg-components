import { Meta, StoryObj } from '@storybook/react';
import { DismissibleAlert } from '../../../react-components/src/components/dismissible-alert/dismissible-alert';

const config: Meta<typeof DismissibleAlert> = {
  title: 'React Components/Dismissible Alert',
  component: DismissibleAlert,
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

type Story = StoryObj<typeof DismissibleAlert>;

export const Basic: Story = {
  args: {
    alert: {
      title: 'Example Alert Title',
      description: 'Example alert description.',
      timestamp: new Date().toLocaleString(),
    },
  },
};
