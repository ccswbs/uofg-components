import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../../react-components/src/components/divider/divider';

const config: Meta<typeof Divider> = {
  title: 'React Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
