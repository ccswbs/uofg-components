import * as React from 'react';
import { Info } from '@uoguelph/react-components/info';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Info> = {
  title: 'React Components/Info',
  component: Info,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      name: 'color',
      description: 'The color of the button',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white'" },
        defaultValue: { summary: "'red'" },
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue', 'green', 'light-grey', 'dark-grey', 'black', 'white'],
    },
    children: {
      name: 'children',
      description: 'The content of the button',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Info>;

export const Basic: Story = {
  args: {
    color: 'red',
    children: (
      <span>
        Eos optio aut officia maiores. Corrupti voluptate earum sit aperiam fugiat sit. Excepturi perspiciatis eligendi
        tempore est beatae ullam minus. Tempore perferendis eos magnam quo temporibus occaecati. A nihil ratione officia
        vel.
      </span>
    ),
  },
};
