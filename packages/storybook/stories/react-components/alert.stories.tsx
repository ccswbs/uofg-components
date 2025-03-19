import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import {
  Alert,
  AlertFooter,
  AlertMessage,
  AlertSubtitle,
  AlertTitle,
} from '../../../react-components/src/components/alert/alert';

const config: Meta<typeof Alert> = {
  title: 'React Components/Alert',
  component: Alert,
  subcomponents: {
    AlertTitle: AlertTitle as ComponentType<unknown>,
    AlertMessage: AlertMessage as ComponentType<unknown>,
    AlertSubtitle: AlertSubtitle as ComponentType<unknown>,
    AlertFooter: AlertFooter as ComponentType<unknown>,
  },
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="red">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const Yellow: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="yellow">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const Blue: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="blue">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const Green: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="green">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const LightGrey: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="grey-light">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const DarkGrey: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="grey-dark">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const Black: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="black">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const White: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="white">Example Title</AlertTitle>
      </Alert>
    );
  },
};

export const WithMessage: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle color="red">Example Title</AlertTitle>

        <AlertMessage>
          Example message. Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus.
          Occaecati perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
          Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas
          quas dicta hic adipisci voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum
          itaque praesentium sint quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem
          enim exercitationem. Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.
        </AlertMessage>
      </Alert>
    );
  },
};

export const WithSubtitleInMessage: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle>Example Title</AlertTitle>

        <AlertMessage>
          <AlertSubtitle>Example Subtitle</AlertSubtitle>
          Example message. Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus.
          Occaecati perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
          Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas
          quas dicta hic adipisci voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum
          itaque praesentium sint quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem
          enim exercitationem. Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.
        </AlertMessage>
      </Alert>
    );
  },
};

export const WithFooter: Story = {
  render: ({ ...args }) => {
    return (
      <Alert {...args}>
        <AlertTitle>Example Title</AlertTitle>

        <AlertMessage>
          <AlertSubtitle>Example Subtitle</AlertSubtitle>
          Example message. Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus.
          Occaecati perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
          Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui. Voluptas
          quas dicta hic adipisci voluptatibus impedit consectetur quae veniam. Totam amet magni. Vero voluptas dolorum
          itaque praesentium sint quasi accusamus. Culpa consequuntur doloribus sint. Pariatur sequi consequuntur quidem
          enim exercitationem. Culpa repellendus eveniet fugit cum. Sapiente doloribus recusandae ex autem.
        </AlertMessage>

        <AlertFooter>Example Footer</AlertFooter>
      </Alert>
    );
  },
};
