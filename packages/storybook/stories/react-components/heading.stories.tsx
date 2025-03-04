import { Heading } from '../../../react-components/src/components/heading/heading';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Heading> = {
  title: 'React Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  name: 'H1',
  args: {
    level: 1,
    children: 'Example H1 heading',
  },
};

export const H2: Story = {
  name: 'H2',
  args: {
    level: 2,
    children: 'Example H2 heading',
  },
};

export const H3: Story = {
  name: 'H3',
  args: {
    level: 3,
    children: 'Example H3 heading',
  },
};

export const H4: Story = {
  name: 'H4',
  args: {
    level: 4,
    children: 'Example H4 heading',
  },
};

export const H5: Story = {
  name: 'H5',
  args: {
    level: 5,
    children: 'Example H5 heading',
  },
};

export const H6: Story = {
  name: 'H6',
  args: {
    level: 6,
    children: 'Example H6 heading',
  },
};

export const H3StylesAsH1: Story = {
  name: 'H3 Styles As H1',
  args: {
    level: 3,
    children: 'Example H1 heading with H3 styles',
    as: 'h1',
  },
};
