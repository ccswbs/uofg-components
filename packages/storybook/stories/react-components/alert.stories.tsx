import { Alert } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Alert> = {
  title: 'React Components/Alert',
  component: Alert,
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
      description: 'The title of the alert',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
    color: {
      name: 'color',
      description: 'The color of the top bar of the alert',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue' | 'green' | 'grey-light' | 'grey-dark' | 'black' | 'white'" },
        defaultValue: { summary: "'red'" }
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue', 'green', 'grey-light', 'grey-dark', 'black', 'white'],
    },
    subtitle: {
      name: 'subtitle',
      description: 'The subtitle of the alert',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
    message: {
      name: 'message',
      description: 'The main content of the alert',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'text',
      },
    },
    footer: {
      name: 'footer',
      description: 'The content of the alert footer',
      table: { type: { summary: 'React.ReactNode?' } },
      control: {
        type: 'text',
      },
    },
  },
};

export default config;

type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {
    title: 'Example Title',
    color: 'red',
    subtitle: 'Example Subtitle',
    message:
      'Example message. Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas quas dicta hic adipisci voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum itaque praesentium sint quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem enim exercitationem. Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.',
    footer: 'Example Footer',
  },
};

export const NoFooter: Story = {
  args: {
    title: 'Example Title',
    subtitle: 'Example Subtitle',
    message:
      'Example message. Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit. Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas quas dicta hic adipisci voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum itaque praesentium sint quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem enim exercitationem. Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.',
  },
};
