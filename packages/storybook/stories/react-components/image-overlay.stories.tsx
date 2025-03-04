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
  argTypes: {
    as: {
      name: 'as',
      description: "The element/component to render the image overlay's image as",
      table: {
        type: {
          summary:
            "React.ElementType<{ src: string; alt: string; height?: number; width?: number; className?: string }, 'img'>;",
        },
      },
      control: false,
    },
    src: {
      name: 'src',
      description: 'The URL of the image to display',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    alt: {
      name: 'alt',
      description: 'The alt text for the image',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    width: {
      name: 'width',
      description: 'The width of the image in pixels',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    height: {
      name: 'height',
      description: 'The height of the image in pixels',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    alignment: {
      name: 'alignment',
      description: 'The alignment of the content in the image overlay',
      table: {
        type: {
          summary: "'top' | 'center' | 'bottom'",
        },
        defaultValue: { summary: "'center'" },
      },
      control: {
        type: 'select',
      },
      options: ['top', 'center', 'bottom'],
    },
    overlay: {
      name: 'overlay',
      description: 'An overlay to display over the image',
      table: {
        type: {
          summary: "'light' | 'dark' | 'none'",
        },
        defaultValue: { summary: "'none'" },
      },
      control: {
        type: 'select',
      },
      options: ['light', 'dark', 'none'],
    },
    children: {
      name: 'children',
      description: 'The content of the image overlay',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
  },
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
