import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
} from '../../../react-components/src/components/breadcrumbs/breadcrumbs';

const config: Meta<typeof Breadcrumbs> = {
  title: 'React Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: {
    BreadcrumbHome: BreadcrumbHome as ComponentType<unknown>,
    Breadcrumb: Breadcrumb as ComponentType<unknown>,
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

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbHome />
        <Breadcrumb href="/example-page-1">Example Page 1</Breadcrumb>
        <Breadcrumb href="/example-page-2">Example Page 2</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const WithManyCrumbs: Story = {
  render: ({ ...args }) => {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbHome />
        <Breadcrumb href="/example-page-1">Example Page 1</Breadcrumb>
        <Breadcrumb href="/example-page-2">Example Page 2</Breadcrumb>
        <Breadcrumb href="/example-page-3">Example Page 3</Breadcrumb>
        <Breadcrumb href="/example-page-4">Example Page 4</Breadcrumb>
        <Breadcrumb href="/example-page-5">Example Page 5</Breadcrumb>
        <Breadcrumb href="/example-page-6">Example Page 6</Breadcrumb>
        <Breadcrumb href="/example-page-7">Example Page 7</Breadcrumb>
      </Breadcrumbs>
    );
  },
};
