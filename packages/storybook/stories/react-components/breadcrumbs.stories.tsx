import { Breadcrumbs } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Breadcrumbs> = {
  title: 'React Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    links: {
      name: 'links',
      description: 'The links to display in the breadcrumbs',
      table: { type: { summary: '{ title: string; url: string; }[]' } },
      control: {
        type: 'object',
      },
    },
    as: {
      name: 'as',
      description: 'The HTMLElement/React component to render a link in the breadcrumbs as',
      table: {
        type: { summary: "ElementType<{ href?: string }, 'a'>" },
        defaultValue: { summary: "'a'" },
      },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    links: [
      {
        title: 'Example Page 1',
        url: '/example-page-1',
      },
      {
        title: 'Example Page 2',
        url: '/example-page-2',
      },
    ],
  },
};

export const WithManyCrumbs: Story = {
  args: {
    links: [
      {
        title: 'Example Page 1',
        url: '/example-page-1',
      },
      {
        title: 'Example Page 2',
        url: '/example-page-2',
      },
      {
        title: 'Example Page 3',
        url: '/example-page-3',
      },
      {
        title: 'Example Page 4',
        url: '/example-page-4',
      },
      {
        title: 'Example Page 5',
        url: '/example-page-5',
      },
      {
        title: 'Example Page 6',
        url: '/example-page-6',
      },
      {
        title: 'Example Page 7',
        url: '/example-page-7',
      },
    ],
  },
};
