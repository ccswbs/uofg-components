import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../../react-components/src/components/typography/typography';

const config: Meta<typeof Typography> = {
  title: 'React Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  name: 'H1',
  args: {
    as: 'h1',
    type: 'h1',
    children: 'Example H1 heading',
  },
};

export const H2: Story = {
  name: 'H2',
  args: {
    as: 'h2',
    type: 'h2',
    children: 'Example H2 heading',
  },
};

export const H3: Story = {
  name: 'H3',
  args: {
    as: 'h3',
    type: 'h3',
    children: 'Example H3 heading',
  },
};

export const H4: Story = {
  name: 'H4',
  args: {
    as: 'h4',
    type: 'h4',
    children: 'Example H4 heading',
  },
};

export const H5: Story = {
  name: 'H5',
  args: {
    as: 'h5',
    type: 'h5',
    children: 'Example H5 heading',
  },
};

export const H6: Story = {
  name: 'H6',
  args: {
    as: 'h6',
    type: 'h6',
    children: 'Example H6 heading',
  },
};

export const Body: Story = {
  name: 'Body',
  args: {
    as: 'p',
    type: 'body',
    children: 'Example body text',
  },
};

export const H3StylesAsH1: Story = {
  name: 'H3 Styles As H1',
  args: {
    as: 'h1',
    type: 'h3',
    children: 'Example H1 heading with H3 styles',
  },
};
