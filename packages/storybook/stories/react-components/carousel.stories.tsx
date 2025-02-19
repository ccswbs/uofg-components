import * as React from 'react';
import { Carousel } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Carousel> = {
  title: 'React Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      name: 'display',
      description: 'The number of items to display at a time within the carousel',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: "'1'" },
      },
      control: {
        type: 'number',
      },
    },
    loop: {
      name: 'loop',
      description: 'The behavior of the carousel when the last item is reached',
      table: {
        type: { summary: "'none' | 'jump' | 'continuous'" },
        defaultValue: { summary: "'none'" },
      },
      control: {
        type: 'select',
      },
      options: ['none', 'jump', 'continuous'],
    },
    children: {
      name: 'children',
      description: 'The content of the card body',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    display: 1,
    loop: 'none',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};

export const MultipleItemsDisplayed: Story = {
  args: {
    display: 2,
    loop: 'none',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};

export const JumpLoop: Story = {
  args: {
    display: 2,
    loop: 'jump',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};

export const ContinuousLoop: Story = {
  args: {
    display: 3,
    loop: 'continuous',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};
