import * as React from 'react';
import { Card } from '@uoguelph/react-components';

const config = {
  title: 'React Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { name: 'title', description: 'The title of the accordion', table: { type: { summary: 'string' } } },
    as: {
      name: 'as',
      description: "The HTML element to render the card as. If set to 'link', a href should be provided.",
      table: { type: { summary: "'div' | 'link'" }, defaultValue: { summary: "'div'" } },
    },
    href: {
      name: 'href',
      description: "The href to use for the card as a link. Only provide this if as is set to 'link'",
      table: { type: { summary: 'string?' } },
    },
    className: {
      name: 'className',
      description: "Classes to apply to the card's main container",
      table: { type: { summary: 'string?' } },
    },
    image: {
      name: 'image',
      description: 'The image to display in the card header',
      table: { type: { summary: 'React.ReactNode?' } },
    },
    children: {
      name: 'children',
      description: 'The content of the card body',
      table: { type: { summary: 'React.ReactNode?' } },
    },
    footer: {
      name: 'footer',
      description: 'The content of the card footer',
      table: { type: { summary: 'React.ReactNode?' } },
    },
  },
};

export default config;

export const Basic = {
  args: {
    title: 'Example Title',
    className: 'w-96',
  },
};

export const WithBodyContent = {
  args: {
    title: 'Example Title',
    className: 'w-96',
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
      </div>
    ),
  },
};

export const WithImage = {
  args: {
    title: 'Example Title',
    className: 'w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="aspect-[3/2] w-full"
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

export const WithFooter = {
  args: {
    title: 'Example Title',
    className: 'w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="aspect-[3/2] w-full"
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

export const AsALink = {
  args: {
    as: 'link',
    title: 'Example Title',
    className: 'w-96',
    image: (
      <img
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="Placeholder image"
        className="aspect-[3/2] w-full"
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
