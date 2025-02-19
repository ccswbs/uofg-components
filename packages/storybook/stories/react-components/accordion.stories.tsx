import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@uoguelph/react-components';

const config: Meta<typeof Accordion> = {
  title: 'React Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      description: 'The title of the accordion',
      table: { type: { summary: 'React.ReactNode' } },
      control: false,
    },
    children: {
      name: 'children',
      description: 'The content of the accordion',
      table: { type: { summary: 'React.ReactNode' } },
      control: false,
    },
  },
};

export default config;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    title: 'Example Title',
    children: (
      <div>
        Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis
        ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis
        alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas quas dicta hic adipisci
        voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum itaque praesentium sint
        quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem enim exercitationem.
        Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.
      </div>
    ),
  },
};
