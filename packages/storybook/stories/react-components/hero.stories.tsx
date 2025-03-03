import * as React from 'react';
import { Hero, HeroTitle, HeroVideo } from '../../../react-components/src/components/hero';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

const config: Meta<typeof Hero> = {
  title: 'React Components/Hero',
  component: Hero,
  subcomponents: {
    HeroTitle: HeroTitle as ComponentType<unknown>,
  },
  parameters: {
    layout: 'fullScreen',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Hero>;

const image = {
  src: 'https://picsum.photos/seed/hero/1680/640',
  height: 1680,
  width: 640,
  alt: 'Placeholder image',
};

const video = {
  src: 'https://www.youtube.com/watch?v=vmILmBbl8hk',
  title: 'Why Choose U of G? - Banky',
  transcript:
    'https://preview-ugconthub.netlify.app/_gatsby/file/698e52bbf7d24a15d69d4a3c46c326ce/Banky_Why_Choose_U_of_G_Visual_Transcript.txt?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2021-06%2FBanky_Why_Choose_U_of_G_Visual_Transcript.txt&cd=307f9699436c68e4c4b41f02e6e2946e',
};

export const BasicHero: Story = {
  args: {
    variant: 'basic',
    ...image,
  },
  render: ({ ...args }) => (
    <Hero {...args}>
      <HeroTitle>Lorem Ipsum</HeroTitle>
    </Hero>
  ),
};

export const BasicWithModalVideo: Story = {
  args: {
    variant: 'basic',
    ...image,
  },
  render: ({ ...args }) => (
    <Hero {...args}>
      <HeroTitle>Lorem Ipsum</HeroTitle>

      <HeroVideo {...video} />
    </Hero>
  ),
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
