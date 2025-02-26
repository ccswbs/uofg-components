import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../../react-components/src/components/accordion';

const config: Meta<typeof Accordion> = {
  title: 'React Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
      description: {
        component:
          'The Accordion component is used for organizing information into collapsible sections which respond to user interaction.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      description: 'The title of the accordion',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
    children: {
      name: 'children',
      description: 'The content of the accordion',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
  },
};

export default config;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    title: 'Example Title',
    children:
      'Quas eum reprehenderit beatae nemo. Natus nihil corrupti. Facere quibusdam velit. Veniam magni omnis minus. Eum harum voluptatibus nostrum laborum unde. Deleniti similique magnam error illo neque alias eos minus repudiandae.',
  },
};
