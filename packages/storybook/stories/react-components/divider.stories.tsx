import * as React from 'react';
import { Divider } from '../../../react-components/src/components/divider/divider';
import { Meta, StoryObj } from '@storybook/react';

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
