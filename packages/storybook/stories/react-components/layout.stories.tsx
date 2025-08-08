import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Layout, LayoutContent } from '../../../react-components/src/components/layout/layout';

const config: Meta<typeof Layout> = {
  title: 'React Components/Layout',
  component: Layout,
  subcomponents: {
    LayoutContent: LayoutContent as ComponentType<unknown>,
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

type Story = StoryObj<typeof Layout>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return (
      <Layout {...args}>
        <LayoutContent>Page Content</LayoutContent>
      </Layout>
    );
  },
};
