import { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from '../../../react-components/src/components/carousel/carousel';

const config: Meta<typeof Carousel> = {
  title: 'React Components/Carousel',
  component: Carousel,
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

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    display: 1,
    loop: 'none',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};

export const MultipleItemsDisplayed: Story = {
  args: {
    display: 2,
    loop: 'none',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};

export const JumpLoop: Story = {
  args: {
    display: 2,
    loop: 'jump',
    children: [
      <div key="test-1" className="flex h-96 items-center justify-center border-2">
        Carousel Item 1
      </div>,
      <div key="test-2" className="flex h-96 items-center justify-center border-2">
        Carousel Item 2
      </div>,
      <div key="test-3" className="flex h-96 items-center justify-center border-2">
        Carousel Item 3
      </div>,
      <div key="test-4" className="flex h-96 items-center justify-center border-2">
        Carousel Item 4
      </div>,
      <div key="test-5" className="flex h-96 items-center justify-center border-2">
        Carousel Item 5
      </div>,
      <div key="test-6" className="flex h-96 items-center justify-center border-2">
        Carousel Item 6
      </div>,
      <div key="test-7" className="flex h-96 items-center justify-center border-2">
        Carousel Item 7
      </div>,
    ],
  },
};
