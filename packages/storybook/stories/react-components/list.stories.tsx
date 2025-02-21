import { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '@uoguelph/react-components';
import React from 'react';

const config: Meta<typeof List> = {
  title: 'React Components/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    className: { control: false },
  },
};

export default config;

type Story = StoryObj<typeof List>;

export const UnorderedList: Story = {
  args: {
    as: 'ul',
    children: (
      <>
        <ListItem>Example List Item 1</ListItem>
        <ListItem>Example List Item 2</ListItem>
        <ListItem>Example List Item 3</ListItem>
        <ListItem>Example List Item 4</ListItem>
        <ListItem>Example List Item 5</ListItem>
      </>
    ),
  },
};

export const OrderedList: Story = {
  args: {
    as: 'ol',
    children: (
      <>
        <ListItem>Example List Item 1</ListItem>
        <ListItem>Example List Item 2</ListItem>
        <ListItem>Example List Item 3</ListItem>
        <ListItem>Example List Item 4</ListItem>
        <ListItem>Example List Item 5</ListItem>
      </>
    ),
  },
};
