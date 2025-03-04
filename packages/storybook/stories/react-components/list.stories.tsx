import { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '../../../react-components/src/components/list/list';
import React from 'react';

const config: Meta<typeof List> = {
  title: 'React Components/List',
  component: List,
  subcomponents: { ListItem },
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      name: 'as',
      description: 'The HTMLElement/React component to render the list as',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ul' },
      },
      control: {
        type: 'select',
      },
      options: ['ul', 'ol'],
    },
    className: {
      name: 'className',
      description: 'Classes to apply to the list',
      table: { type: { summary: 'string?' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the list, should always be ListItem components or fragments of ListItem components',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
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
