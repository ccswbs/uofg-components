import { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '../../../react-components/src/components/list/list';
import React, { ComponentType } from 'react';

const config: Meta<typeof List> = {
  title: 'React Components/List',
  component: List,
  subcomponents: {
    ListItem: ListItem as ComponentType<unknown>,
  },
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof List>;

export const UnorderedList: Story = {
  args: {
    as: 'ul',
  },
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem>Example List Item 1</ListItem>
      <ListItem>Example List Item 2</ListItem>
      <ListItem>Example List Item 3</ListItem>
      <ListItem>Example List Item 4</ListItem>
      <ListItem>Example List Item 5</ListItem>
    </List>
  ),
};

export const OrderedList: Story = {
  args: {
    as: 'ol',
  },
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem>Example List Item 1</ListItem>
      <ListItem>Example List Item 2</ListItem>
      <ListItem>Example List Item 3</ListItem>
      <ListItem>Example List Item 4</ListItem>
      <ListItem>Example List Item 5</ListItem>
    </List>
  ),
};

export const NestedUnorderedList: Story = {
  args: {
    as: 'ul',
  },
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem>Example List Item 1</ListItem>
      <ListItem>Example List Item 2</ListItem>
      <ListItem>Example List Item 3</ListItem>
      <List as="ul">
        <ListItem>Example Nested List Item 1</ListItem>
        <ListItem>Example Nested List Item 2</ListItem>
      </List>
      <ListItem>Example List Item 6</ListItem>
    </List>
  ),
};

export const NestedOrderedList: Story = {
  args: {
    as: 'ol',
  },
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem>Example List Item 1</ListItem>
      <ListItem>Example List Item 2</ListItem>
      <ListItem>Example List Item 3</ListItem>
      <List as="ol">
        <ListItem>Example Nested List Item 1</ListItem>
        <ListItem>Example Nested List Item 2</ListItem>
      </List>
      <ListItem>Example List Item 6</ListItem>
    </List>
  ),
};
