import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Contact } from '@uoguelph/react-components';

const config: Meta<typeof Contact> = {
  title: "React Components/Contact",
  component: Contact,
  parameters: {
    layout: "centered",
    docs: {
      toc: true,
    },
  },
  tags: ["autodocs"],
};

export default config;

type Story = StoryObj<typeof Contact>;
export const Default: Story = {
  args: {
    name: "Example Name",
    title: "Example Title",
    phone: { number: '123-456-7890', extension: "12345", },
    email: "example@example.com",
  },
};
