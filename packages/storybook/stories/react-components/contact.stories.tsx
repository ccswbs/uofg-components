import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Contact } from '@uoguelph/react-components';

const config: Meta<typeof Contact> = {
  title: 'React Components/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      name: 'name',
      description: 'The name of the contact',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'title',
      description: 'The title of the contact',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    phone: {
      name: 'phone',
      description: 'The phone number for the contact',
      table: {
        type: { summary: 'string | { number: string, extension: string }' },
      },
      control: {
        type: 'object',
      },
    },
    email: {
      name: 'email',
      description: 'The email for the contact',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
};

export default config;

type Story = StoryObj<typeof Contact>;
export const Default: Story = {
  args: {
    name: 'Example Name',
    title: 'Example Title',
    phone: { number: '123-456-7890', extension: '12345' },
    email: 'example@example.com',
  },
};

export const NoExtension: Story = {
  args: {
    name: 'Example Name',
    title: 'Example Title',
    phone: '123-456-7890',
    email: 'example@example.com',
  },
};
