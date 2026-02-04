import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { List, ListItem } from '../../../react-components/src/components/list/list';

const config: Meta<typeof List> = {
  title: 'React Components/List',
  component: List,
  subcomponents: {
    ListItem: ListItem as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
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
        <List as="ul">
          <ListItem>Example Nested List Item 1</ListItem>
          <ListItem>Example Nested List Item 2</ListItem>
          <List as="ul">
            <ListItem>Example Nested List Item 1</ListItem>
            <ListItem>Example Nested List Item 2</ListItem>
          </List>
        </List>
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
        <List as="ol">
          <ListItem>Example Nested List Item 1</ListItem>
          <ListItem>Example Nested List Item 2</ListItem>
          <List as="ol">
            <ListItem>Example Nested List Item 1</ListItem>
            <ListItem>Example Nested List Item 2</ListItem>
          </List>
        </List>
      </List>
      <ListItem>Example List Item 6</ListItem>
    </List>
  ),
};

export const LongList: Story = {
  args: {
    as: 'ul',
  },
  render: ({ ...args }) => (
    <div className="w-full">
      <List {...args}>
        <ListItem>Introduction to responsive design and modern web development practices</ListItem>
        <ListItem>Understanding CSS grid systems and layout fundamentals</ListItem>
        <ListItem>Flexbox fundamentals and practical use cases in component design</ListItem>
        <ListItem>CSS multicolumn layout properties and browser support considerations</ListItem>
        <ListItem>Responsive typography principles for scalable interfaces</ListItem>
        <ListItem>Mobile-first design strategies and progressive enhancement</ListItem>
        <ListItem>Accessibility considerations and inclusive design patterns</ListItem>
        <ListItem>Performance optimization techniques for modern web applications</ListItem>
        <ListItem>Cross-browser compatibility testing and fallback strategies</ListItem>
        <ListItem>Modern CSS features and graceful degradation approaches</ListItem>
        <ListItem>Component-based architecture and design system implementation</ListItem>
        <ListItem>User experience best practices for responsive layouts</ListItem>
        <ListItem>Testing methodologies for responsive components</ListItem>
        <ListItem>Documentation strategies for component libraries</ListItem>
        <ListItem>Version control practices for design systems</ListItem>
      </List>
    </div>
  ),
};

export const LongOrderedList: Story = {
  args: {
    as: 'ol',
  },
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem>Begin by analyzing the project requirements and scope</ListItem>
      <ListItem>Create a detailed project timeline with milestones and deliverables</ListItem>
      <ListItem>Set up the development environment and necessary tools</ListItem>
      <ListItem>Design the component architecture and establish coding standards</ListItem>
      <ListItem>Implement the core functionality with proper testing coverage</ListItem>
      <ListItem>Conduct thorough testing across different devices and browsers</ListItem>
      <ListItem>Optimize performance and ensure accessibility compliance</ListItem>
      <ListItem>Document the implementation and create usage examples</ListItem>
      <ListItem>Perform code review and address any identified issues</ListItem>
      <ListItem>Deploy to staging environment for final validation</ListItem>
      <ListItem>Release to production with proper monitoring in place</ListItem>
      <ListItem>Gather feedback and plan for future iterations</ListItem>
    </List>
  ),
};
