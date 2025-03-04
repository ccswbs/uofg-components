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

export const TopAligned: Story = {
  args: {
    ...image,
    alignment: 'top',
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};

export const BottomAligned: Story = {
  args: {
    ...image,
    alignment: 'bottom',
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};

export const Blurred: Story = {
  args: {
    ...image,
    blurred: true,
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};

export const DarkOverlay: Story = {
  args: {
    ...image,
    overlay: 'dark',
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};

export const LightOverlay: Story = {
  args: {
    ...image,
    overlay: 'light',
    children: <div className="tw:bg-black/50 tw:text-white tw:p-4">Whatever content you want here</div>,
  },
};
