import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ComponentType } from 'react';
import {
  LinkCarousel,
  LinkCarouselContent,
  LinkCarouselItem,
  LinkCarouselLink,
  LinkCarouselLinks,
} from '../../../react-components/src/components/link-carousel/link-carousel';

const config: Meta<typeof LinkCarousel> = {
  title: 'React Components/LinkCarousel',
  component: LinkCarousel,
  subcomponents: {
    LinkCarouselLink: LinkCarouselLink as ComponentType<unknown>,
    LinkCarouselLinks: LinkCarouselLinks as ComponentType<unknown>,
    LinkCarouselContent: LinkCarouselContent as ComponentType<unknown>,
    LinkCarouselItem: LinkCarouselItem as ComponentType<unknown>,
  },
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof LinkCarousel>;

const image = {
  src: 'https://picsum.photos/seed/first/1680/640',
  height: 1680,
  width: 640,
  alt: 'Placeholder image',
  className: 'w-full',
};

export const Default: Story = {
  args: {
    stack: true,
    direction: 'right',
  },
  render: ({ ...args }) => (
    <LinkCarousel {...args}>
      <LinkCarouselLinks>
        <LinkCarouselLink id="item-1" href="#">
          Carousel Link 1
        </LinkCarouselLink>
        <LinkCarouselLink id="item-2" href="#">
          Carousel Link 2
        </LinkCarouselLink>
        <LinkCarouselLink id="item-3" href="#">
          Carousel Link 3
        </LinkCarouselLink>
        <LinkCarouselLink id="item-4" href="#">
          Carousel Link 4
        </LinkCarouselLink>
      </LinkCarouselLinks>

      <LinkCarouselContent>
        <LinkCarouselItem id="item-1">
          <div className="tw:h-96 tw:bg-yellow"></div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-2">
          <div className="tw:h-96 tw:bg-blue"></div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-3">
          <div className="tw:h-96 tw:bg-green"></div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-4">
          <div className="tw:h-96 tw:bg-red"></div>
        </LinkCarouselItem>
      </LinkCarouselContent>
    </LinkCarousel>
  ),
};
