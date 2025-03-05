import * as React from 'react';
import {
  LinkCarousel,
  LinkCarouselLinks,
  LinkCarouselLink,
  LinkCarouselItem,
  LinkCarouselContent,
} from '../../../react-components/src/components/link-carousel/link-carousel';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

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
          <div className="tw:h-[300px] tw:bg-yellow">Testing Item 1</div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-2">
          <div className="tw:h-[300px] tw:bg-blue">Testing Item 2</div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-3">
          <div className="tw:h-[300px] tw:bg-green">Testing Item 3</div>
        </LinkCarouselItem>
        <LinkCarouselItem id="item-4">
          <div className="tw:h-[300px] tw:bg-red">Testing Item 4</div>
        </LinkCarouselItem>
      </LinkCarouselContent>
    </LinkCarousel>
  ),
};
