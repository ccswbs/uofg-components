import * as React from 'react';
import { ImageOverlay } from '../../../react-components/src/components/image-overlay/image-overlay';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof ImageOverlay> = {
  title: 'React Components/ImageOverlay',
  component: ImageOverlay,
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof ImageOverlay>;

const image = {
  src: 'https://picsum.photos/seed/hero/1680/640',
  height: 1680,
  width: 640,
  alt: 'Placeholder image',
};

export const Default: Story = {
  args: {
    ...image,
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};
