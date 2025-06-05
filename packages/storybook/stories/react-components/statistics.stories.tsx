import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import {
  Statistics,
  StatisticsItem,
  StatisticsItemImage,
  StatisticsItemRepresents,
  StatisticsItemValue,
} from '../../../react-components/src/components/statistics/statistics';

const config: Meta<typeof Statistics> = {
  title: 'React Components/Statistics',
  component: Statistics,
  subcomponents: {
    StatisticsItem: StatisticsItem as ComponentType<unknown>,
    StatisticsItemRepresents: StatisticsItemRepresents as ComponentType<unknown>,
    StatisticsItemValue: StatisticsItemValue as ComponentType<unknown>,
    StatisticsItemImage: StatisticsItemImage as ComponentType<unknown>,
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

type Story = StoryObj<typeof Statistics>;

export const SolidColorsFull: Story = {
  args: {
    variant: 'solid-colors-full',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
      </Statistics>
    );
  },
};

export const SolidColorsNoGap: Story = {
  args: {
    variant: 'solid-colors-no-gap',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
      </Statistics>
    );
  },
};

export const SolidColors: Story = {
  args: {
    variant: 'solid-colors',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
      </Statistics>
    );
  },
};

export const LightGrey: Story = {
  args: {
    variant: 'light-grey',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
      </Statistics>
    );
  },
};

export const LeftBorder: Story = {
  args: {
    variant: 'left-border',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
        </StatisticsItem>
      </Statistics>
    );
  },
};

export const WithImages: Story = {
  args: {
    variant: 'solid-colors',
  },
  render: ({ ...args }) => {
    return (
      <Statistics {...args}>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
          <StatisticsItemImage src="https://picsum.photos/300/200" alt="Example Image" width="300" height="200" />
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
          <StatisticsItemImage src="https://picsum.photos/300/200" alt="Example Image" width="300" height="200" />
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
          <StatisticsItemImage src="https://picsum.photos/300/200" alt="Example Image" width="300" height="200" />
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsItemValue>Example Value</StatisticsItemValue>
          <StatisticsItemRepresents>Example Represents</StatisticsItemRepresents>
          <StatisticsItemImage src="https://picsum.photos/300/200" alt="Example Image" width="300" height="200" />
        </StatisticsItem>
      </Statistics>
    );
  },
};
