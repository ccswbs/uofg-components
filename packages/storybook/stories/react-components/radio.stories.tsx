import { fn } from '@storybook/test';
import { Radio } from '@uoguelph/react-components/radio';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Radio> = {
  title: 'React Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: fn(),
  },
};

export default config;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    options: [
      {
        value: 'option-1',
        label: 'Option 1',
      },
      {
        value: 'option-2',
        label: 'Option 2',
      },
      {
        value: 'option-3',
        label: 'Option 3',
      },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    options: [
      {
        value: 'option-1',
        label: 'Option 1',
      },
      {
        value: 'option-2',
        label: 'Option 2',
      },
      {
        value: 'option-3',
        label: 'Option 3',
      },
    ],
    label: 'Example Radio',
  },
};

export const Inline: Story = {
  args: {
    options: [
      {
        value: 'option-1',
        label: 'Option 1',
      },
      {
        value: 'option-2',
        label: 'Option 2',
      },
      {
        value: 'option-3',
        label: 'Option 3',
      },
    ],
    inline: true,
  },
};
