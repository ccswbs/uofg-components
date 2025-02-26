import * as React from 'react';
import { Card, CardImage, CardContent, CardTitle, CardFooter } from '../../../react-components/src/components/card';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Card> = {
  title: 'React Components/Card',
  component: Card,
  subcomponents: {
    //@ts-ignore
    CardContent,
    //@ts-ignore
    CardTitle,
    //@ts-ignore
    CardImage,
    //@ts-ignore
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
};

export default config;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    className: 'tw:w-96',
  },
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <CardContent>
          <CardTitle>Example Title</CardTitle>
        </CardContent>
      </Card>
    );
  },
};

export const WithBodyContent: Story = {
  args: {
    className: 'tw:w-96',
  },
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <CardContent>
          <CardTitle>Example Title</CardTitle>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const WithImage: Story = {
  args: {
    className: 'tw:w-96',
  },
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <CardImage
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <CardContent>
          <CardTitle>Example Title</CardTitle>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const WithFooter: Story = {
  args: {
    className: 'tw:w-96',
  },
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <CardImage
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <CardContent>
          <CardTitle>Example Title</CardTitle>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </CardContent>

        <CardFooter>Example Footer</CardFooter>
      </Card>
    );
  },
};

export const AsALink: Story = {
  args: {
    as: 'a',
    className: 'tw:w-96',
    href: '#',
  },
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <CardImage
          src="https://picsum.photos/300/200"
          alt="Placeholder image"
          width="300"
          height="200"
          className="tw:aspect-[3/2] tw:w-full"
        />

        <CardContent>
          <CardTitle>Example Title</CardTitle>
          <div>
            Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
            perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
            Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
          </div>
        </CardContent>

        <CardFooter>Example Footer</CardFooter>
      </Card>
    );
  },
};
