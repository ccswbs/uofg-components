import { Meta, StoryObj } from '@storybook/react-vite';
import { DismissibleAlert } from '../../../react-components/src/components/dismissible-alert/dismissible-alert';

const config: Meta<typeof DismissibleAlert> = {
  title: 'React Components/DismissibleAlert',
  component: DismissibleAlert,
  parameters: {
    'layout': 'fullscreen',
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
    title: 'Example Alert Title',
    description: 'Example alert description.',
    timestamp: new Date().toLocaleString(),
  },
};

export const WithLink: Story = {
  args: {
    title: 'Example Alert Title',
    description:
      'Please visit <a href="https://uoguelph.ca/campus-status">uoguelph.ca/campus-status</a> for more information.',
    timestamp: new Date().toLocaleString(),
  },
};
