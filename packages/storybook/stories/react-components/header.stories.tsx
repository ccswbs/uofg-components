import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import { Header, HeaderLink, HeaderMenu, HeaderMenuItem } from '../../../react-components/src/components/header/header';
import '../../../web-components/src/components/uofg-header/uofg-header.svelte';

const config: Meta<typeof Header> = {
  title: 'React Components/Header',
  component: Header,
  subcomponents: {
    HeaderLink: HeaderLink as ComponentType<unknown>,
    HeaderMenu: HeaderMenu as ComponentType<unknown>,
    HeaderMenuItem: HeaderMenuItem as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'fullscreen',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  parameters: {
    description: {
      story: 'T',
    },
  },
  render: ({ ...args }) => {
    return <Header {...args}></Header>;
  },
};

export const WithPageTitle: Story = {
  args: {
    title: 'Example Page Title',
  },
  render: ({ ...args }) => {
    return <Header {...args}></Header>;
  },
};

export const WithPageUrl: Story = {
  args: {
    title: 'Example Page Title',
    url: 'https://example.com',
  },
  render: ({ ...args }) => {
    return <Header {...args}></Header>;
  },
};

export const WithSubNavigation: Story = {
  args: {
    title: 'Example Page Title',
    url: 'https://example.com',
  },
  render: ({ ...args }) => {
    return (
      <Header {...args}>
        <HeaderLink href="#">Link 1</HeaderLink>

        <HeaderMenu title="Menu">
          <HeaderMenuItem>
            <HeaderLink href="#">Link 1</HeaderLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderLink href="#">Link 2</HeaderLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderLink href="#">Link 3</HeaderLink>
          </HeaderMenuItem>
        </HeaderMenu>

        <HeaderLink href="#">Link 2</HeaderLink>
        <HeaderLink href="#">Link 3</HeaderLink>
      </Header>
    );
  },
};

export const DualBrand: Story = {
  args: {
    variant: 'dual-brand',
  },
  render: ({ ...args }) => {
    return <Header {...args}></Header>;
  },
};
