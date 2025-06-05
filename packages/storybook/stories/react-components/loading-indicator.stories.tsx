import { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingIndicator } from '../../../react-components/src/components/loading-indicator/loading-indicator';

const config: Meta<typeof LoadingIndicator> = {
  title: 'React Components/LoadingIndicator',
  component: LoadingIndicator,
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

type Story = StoryObj<typeof LoadingIndicator>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return <LoadingIndicator {...args}></LoadingIndicator>;
  },
};

export const WithText: Story = {
  render: ({ ...args }) => {
    return <LoadingIndicator {...args}>Loading</LoadingIndicator>;
  },
};
