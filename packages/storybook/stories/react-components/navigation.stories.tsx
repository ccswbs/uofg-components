import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Navigation, NavigationLink } from '../../../react-components/src/components/navigation/navigation';

const config: Meta<typeof Navigation> = {
  title: 'React Components/Navigation',
  component: Navigation,
  subcomponents: {
    NavigationLink: NavigationLink as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'padded',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Navigation {...args}>
        <NavigationLink href="/example-page-1">Example Page 1</NavigationLink>
        <NavigationLink href="/example-page-2">Example Page 2</NavigationLink>
        <NavigationLink href="/example-page-3">Example Page 3</NavigationLink>
        <NavigationLink href="/example-page-4">Example Page 4</NavigationLink>
      </Navigation>
    );
  },
};

export const Active: Story = {
  render: ({ ...args }) => {
    return (
      <Navigation {...args}>
        <NavigationLink href="/example-page-1">Example Page 1</NavigationLink>
        <NavigationLink href="/example-page-2" active>
          Example Page 2
        </NavigationLink>
        <NavigationLink href="/example-page-3">Example Page 3</NavigationLink>
        <NavigationLink href="/example-page-4">Example Page 4</NavigationLink>
      </Navigation>
    );
  },
};
