import { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '../../../react-components/src/components/typography/typography';

const config: Meta<typeof Typography> = {
  title: 'React Components/Typography',
  component: Typography,
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

export const EmphasizedH1: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All of the headings can be emphasized with a larger, slightly more opinionated heading style by setting the `emphasize` prop to `true`. This should be used sparingly and in situations where the heading is meant to stand out from the surrounding content. For example, if the heading is within a ImageOverlay component.',
      },
    },
  },
  name: 'Emphasized H1',
  args: {
    as: 'h1',
    type: 'h1',
    children: 'Example H1 heading',
    emphasize: true,
  },
};

export const EmphasizedH2: Story = {
  name: 'Emphasized H2',
  args: {
    as: 'h2',
    type: 'h2',
    children: 'Example H2 heading',
    emphasize: true,
  },
};

export const EmphasizedH3: Story = {
  name: 'Emphasized H3',
  args: {
    as: 'h3',
    type: 'h3',
    children: 'Example H3 heading',
    emphasize: true,
  },
};

export const EmphasizedH4: Story = {
  name: 'Emphasized H4',
  args: {
    as: 'h4',
    type: 'h4',
    children: 'Example H4 heading',
    emphasize: true,
  },
};

export const EmphasizedH5: Story = {
  name: 'Emphasized H5',
  args: {
    as: 'h5',
    type: 'h5',
    children: 'Example H5 heading',
    emphasize: true,
  },
};

export const EmphasizedH6: Story = {
  name: 'Emphasized H6',
  args: {
    as: 'h6',
    type: 'h6',
    children: 'Example H6 heading',
    emphasize: true,
  },
};
