import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import {
  Story,
  StoryBackground,
  StoryBackgroundImage,
  StoryBody,
  StoryFooter,
  StoryForeground,
  StoryForegroundContent,
  StoryForegroundImage,
} from '../../../react-components/src/components/story/story';

const config: Meta<typeof Story> = {
  title: 'React Components/Story',
  component: Story,
  subcomponents: {
    StoryBody: StoryBody as ComponentType<unknown>,
    StoryBackground: StoryBackground as ComponentType<unknown>,
    StoryBackgroundImage: StoryBackgroundImage as ComponentType<unknown>,
    StoryForeground: StoryForeground as ComponentType<unknown>,
    StoryForegroundImage: StoryForegroundImage as ComponentType<unknown>,
    StoryForegroundContent: StoryForegroundContent as ComponentType<unknown>,
    StoryFooter: StoryFooter as ComponentType<unknown>,
  },
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

type Story = StoryObj<typeof Story>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return (
      <Story {...args}>
        <StoryBody>
          <StoryBackground>
            <StoryBackgroundImage
              src="/img/change-happens-banner.jpg"
              alt="Placeholder image"
              width="1920"
              height="700"
              className="object-cover lg:[object-position:left_20px]"
            />
          </StoryBackground>

          <StoryForeground>
            <StoryForegroundContent>
              <div className="text-white">This is the foreground content.</div>
            </StoryForegroundContent>
            <StoryForegroundImage src="/img/asha-edwin.png" alt="Placeholder image" width="1341" height="1275" />
          </StoryForeground>
        </StoryBody>
      </Story>
    );
  },
};

export const WithFooter: Story = {
  render: ({ ...args }) => {
    return (
      <Story {...args}>
        <StoryBody>
          <StoryBackground>
            <StoryBackgroundImage
              src="/img/change-happens-banner.jpg"
              alt="Placeholder image"
              width="1920"
              height="700"
              className="object-cover lg:[object-position:left_20px]"
            />
          </StoryBackground>

          <StoryForeground>
            <StoryForegroundContent>
              <div className="text-white">This is the foreground content.</div>
            </StoryForegroundContent>
            <StoryForegroundImage src="/img/asha-edwin.png" alt="Placeholder image" width="1341" height="1275" />
          </StoryForeground>
        </StoryBody>

        <StoryFooter>This is the footer content.</StoryFooter>
      </Story>
    );
  },
};
