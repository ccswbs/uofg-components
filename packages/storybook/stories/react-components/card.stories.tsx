import * as React from 'react';
import { Card } from '@uoguelph/react-components';

const config = {
  title: 'React Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
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
