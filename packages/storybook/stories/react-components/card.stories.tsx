import * as React from 'react';
import { Card } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Card> = {
  title: 'React Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
      description: {
        component:
          'The Card component is a container used to group related content like text, images, and actions in a styled, organized layout',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      description: 'The title of the accordion',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
    as: {
      name: 'as',
      description:
        'The HTMLElement/React component to render the card as. Cards can be rendered as a div, an article, or any component that acts as a link.',
      table: {
        type: { summary: "React.ElementType<{ href?: string }, 'a'> | 'div' | 'article'" },
        defaultValue: { summary: "'div'" },
      },
      control: false,
    },
    className: {
      name: 'className',
      description: "Classes to apply to the card's main container",
      table: { type: { summary: 'string?' } },
      control: false,
    },
    image: {
      name: 'image',
      description: 'The image to display in the card header',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the card body',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
    footer: {
      name: 'footer',
      description: 'The content of the card footer',
      table: { type: { summary: 'React.ReactNode?' } },
      control: {
        type: 'text',
      },
    },
  },
};

export default config;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Example Title',
    className: 'tw:w-96',
  },
};

export const WithBodyContent: Story = {
  args: {
    title: 'Example Title',
    className: 'tw:w-96',
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
      </div>
    ),
  },
};

export const WithImage: Story = {
  args: {
    title: 'Example Title',
    className: 'tw:w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="tw:aspect-[3/2] tw:w-full"
      />
    ),
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Example Title',
    className: 'tw:w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="tw:aspect-[3/2] tw:w-full"
      />
    ),
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
      </div>
    ),
    footer: 'Example Footer',
  },
};

export const AsALink: Story = {
  args: {
    as: 'a',
    title: 'Example Title',
    className: 'tw:w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="tw:aspect-[3/2] tw:w-full"
      />
    ),
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
      </div>
    ),
    footer: 'Example Footer',
    href: '#',
  },
};
