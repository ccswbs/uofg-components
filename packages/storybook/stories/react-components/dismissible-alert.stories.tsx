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
    title: 'Example Alert Title asdf ahjskdfh aksldkjfh akjlsdfh akjsdhf lakjshf laskj',
    description: 'Example alert description.',
    timestamp: new Date().toLocaleString(),
    link: {
      url: 'https://uoguelph.ca/campus-status',
      text: 'Learn More - Status Page',
    },
  },
};
