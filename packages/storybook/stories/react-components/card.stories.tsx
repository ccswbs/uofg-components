import * as React from 'react';
import { Card, CardImage, CardContent, CardTitle, CardFooter } from '@uoguelph/react-components/card';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Card> = {
  title: 'React Components/Card',
  component: Card,
  subcomponents: {
    CardContent,
    CardTitle,
    CardImage,
    CardFooter,
  },
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
    children: {
      name: 'children',
      description: 'The content of the card',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    className: 'tw:w-96',
    children: (
      <Card.Content>
        <Card.Title>Example Title</Card.Title>
      </Card.Content>
    ),
  },
};

export const WithBodyContent: Story = {
  args: {
    className: 'tw:w-96',
    children: (
      <Card.Content>
        <Card.Title>Example Title</Card.Title>
        <div>
          Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
          ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
          alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
        </div>
      </Card.Content>
    ),
  },
};

export const WithImage: Story = {
  args: {
    className: 'tw:w-96',
    children: (
      <>
        <Card.Image
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <Card.Content>
          <Card.Title>Example Title</Card.Title>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </Card.Content>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    className: 'tw:w-96',
    children: (
      <>
        <Card.Image
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <Card.Content>
          <Card.Title>Example Title</Card.Title>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </Card.Content>

        <Card.Footer>Example Footer</Card.Footer>
      </>
    ),
  },
};

export const AsALink: Story = {
  args: {
    as: 'a',
    title: 'Example Title',
    className: 'tw:w-96',
    children: (
      <>
        <Card.Image
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <Card.Content>
          <Card.Title>Example Title</Card.Title>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </Card.Content>

        <Card.Footer>Example Footer</Card.Footer>
      </>
    ),
    href: '#',
  },
};
