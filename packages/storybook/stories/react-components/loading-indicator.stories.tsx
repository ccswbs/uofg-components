import { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from '../../../react-components/src/components/loading-indicator/loading-indicator';

const config: Meta<typeof LoadingIndicator> = {
  title: 'React Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof LoadingIndicator>;

export const Basic: Story = {
  args: {},
};
