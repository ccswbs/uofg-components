import { Meta, StoryObj } from '@storybook/react-vite';
import { ImageOverlay } from '../../../react-components/src/components/image-overlay/image-overlay';

const config: Meta<typeof ImageOverlay> = {
  title: 'React Components/ImageOverlay',
  component: ImageOverlay,
  parameters: {
    'layout': 'fullscreen',
    'docs': {
      toc: true,
    },
    'in-development': true,
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
    children: <div className="bg-black/50 p-4 text-white">Whatever content you want here</div>,
  },
};
