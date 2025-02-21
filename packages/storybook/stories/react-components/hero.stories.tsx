import * as React from 'react';
import { Hero } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';

const config: Meta<typeof Hero> = {
  title: 'React Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullScreen',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      name: 'as',
      description: "The element/component to render the hero's image as",
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
    variant: {
      name: 'variant',
      description: 'The variant of the hero',
      table: {
        type: {
          summary: "'basic' | 'spotlight'",
        },
        defaultValue: { summary: "'basic'" },
      },
      control: {
        type: 'select',
      },
      options: ['basic', 'spotlight'],
    },
    title: {
      name: 'title',
      description: 'The title of the hero',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    caption: {
      name: 'caption',
      description: 'The caption of the hero',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    alignment: {
      name: 'alignment',
      description: 'The alignment of the title box in the hero (only applicable when variant is "spotlight")',
      table: {
        type: {
          summary: "'left' | 'center' | 'right' | 'fullWidth'",
        },
        defaultValue: { summary: "'left'" },
      },
      control: {
        type: 'select',
      },
      options: ['left', 'center', 'right', 'fullWidth'],
    },
    video: {
      name: 'video',
      description: 'Displays a button that opens a modal video, with the given video details',
      table: {
        type: {
          summary: '{ src: string; title: string; transcript?: string; }',
        },
      },
      control: {
        type: 'object',
      },
    },
    link: {
      name: 'link',
      description: 'Displays a button which links to the given URL and has the given text',
      table: {
        type: {
          summary: '{ href: string; text: string; }',
        },
      },
      control: {
        type: 'object',
      },
    },
  },
};

export default config;

type Story = StoryObj<typeof Hero>;

const image = {
  src: 'https://picsum.photos/seed/hero/1680/640',
  height: 1680,
  width: 640,
  alt: 'Placeholder image',
};

export const BasicHero: Story = {
  args: {
    variant: 'basic',
    title: 'Lorem Ipsum',
    ...image,
  },
};

export const BasicWithModalVideo: Story = {
  args: {
    variant: 'basic',
    title: 'Lorem Ipsum',
    ...image,
    video: {
      src: 'https://www.youtube.com/watch?v=vmILmBbl8hk',
      title: 'Why Choose U of G? - Banky',
      transcript:
        'https://preview-ugconthub.netlify.app/_gatsby/file/698e52bbf7d24a15d69d4a3c46c326ce/Banky_Why_Choose_U_of_G_Visual_Transcript.txt?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2021-06%2FBanky_Why_Choose_U_of_G_Visual_Transcript.txt&cd=307f9699436c68e4c4b41f02e6e2946e',
    },
  },
};

export const SpotlightHero: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    alignment: 'left',
  },
};

export const SpotlightHeroWithCaption: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    alignment: 'left',
  },
};

export const SpotlightHeroWithCaptionAndLink: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    link: { text: 'Lorem Ipsum', href: '/example-page' },
    alignment: 'left',
  },
};

export const SpotlightHeroWithCaptionAndModalVideo: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    video: {
      src: 'https://www.youtube.com/watch?v=vmILmBbl8hk',
      title: 'Why Choose U of G? - Banky',
      transcript:
        'https://preview-ugconthub.netlify.app/_gatsby/file/698e52bbf7d24a15d69d4a3c46c326ce/Banky_Why_Choose_U_of_G_Visual_Transcript.txt?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2021-06%2FBanky_Why_Choose_U_of_G_Visual_Transcript.txt&cd=307f9699436c68e4c4b41f02e6e2946e',
    },
    alignment: 'left',
  },
};

export const SpotlightHeroCenterAligned: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    link: { text: 'Lorem Ipsum', href: '/example-page' },
    alignment: 'center',
  },
};

export const SpotlightHeroRightAligned: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    link: { text: 'Lorem Ipsum', href: '/example-page' },
    alignment: 'right',
  },
};

export const SpotlightHeroFullWidth: Story = {
  args: {
    variant: 'spotlight',
    title: 'Lorem Ipsum',
    ...image,
    caption:
      'Repudiandae sit blanditiis minima harum laborum. Ipsa impedit eum eum sapiente explicabo accusantium tempore nihil.',
    link: { text: 'Lorem Ipsum', href: '/example-page' },
    alignment: 'fullWidth',
  },
};
