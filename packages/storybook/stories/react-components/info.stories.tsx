import * as React from 'react';
import { Info } from '../../../react-components/src/components/info/info';
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
