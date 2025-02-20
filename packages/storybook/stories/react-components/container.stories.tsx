import * as React from 'react';
import { Container } from "@uoguelph/react-components";

const config = {
  title: "React Components/Container",
  component: Container,
  parameters: {
    layout: "padded",
    docs: {
      toc: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      name: 'className',
      description: "Classes to apply to the card's main container",
      table: { type: { summary: 'string?' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the container',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
    centered: {
      name: 'centered',
      description: 'Whether the container should be centered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    }
  },
};

export default config;

export const Default = {
  args: {
    centered: false,
    children: <div>Whatever content you want here</div>,
  },
};

export const Centered = {
  args: {
    centered: true,
    children: <div>Whatever content you want here</div>,
  },
};
