import { Meta, StoryObj } from '@storybook/react';
import { EmbeddedVideo } from '../../../react-components/src/components/embedded-video/embedded-video';
import { MediaCaption } from '../../../react-components/src/components/media-caption/media-caption';

const config: Meta<typeof MediaCaption> = {
  title: 'React Components/MediaCaption',
  component: MediaCaption,
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    className: { control: false },
  },
};

export default config;

const image = {
  src: 'https://picsum.photos/seed/media/1000/1000',
  height: 1000,
  width: 1000,
  alt: 'Placeholder image',
};

const video = {
  src: 'https://www.youtube.com/watch?v=vmILmBbl8hk',
  title: 'Why Choose U of G? - Banky',
  transcript:
    'https://preview-ugconthub.netlify.app/_gatsby/file/698e52bbf7d24a15d69d4a3c46c326ce/Banky_Why_Choose_U_of_G_Visual_Transcript.txt?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2021-06%2FBanky_Why_Choose_U_of_G_Visual_Transcript.txt&cd=307f9699436c68e4c4b41f02e6e2946e',
};

const Body = () => (
  <p>
    Error officia iure dicta illum. Corporis in cum porro excepturi officiis nesciunt a. Neque velit dolores impedit
    fugiat quae alias. Corporis voluptas delectus error veritatis labore quae magnam eos sequi. Et dicta aut nulla
    commodi voluptatem rerum. Porro voluptatum quibusdam quo incidunt. Rem dignissimos rerum laboriosam cumque. Nisi
    quasi occaecati esse exercitationem asperiores nam. Ex vero voluptatibus animi. Explicabo numquam reprehenderit ipsa
    unde ad. Maxime dolor illum minima nam perspiciatis autem. Necessitatibus vitae molestias. Dolorem amet provident
    molestias dolorum esse asperiores. Ipsa atque sunt neque deserunt in incidunt sed. Vitae occaecati accusantium iure
    doloremque voluptas deleniti enim officia. Distinctio nulla vero quas quam doloremque distinctio sit repellendus
    itaque. Itaque itaque esse.
  </p>
);

type Story = StoryObj<typeof MediaCaption>;

export const SmallImageLeft: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'small',
    position: 'left',
    children: <Body />,
  },
};

export const MediumImageLeft: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'medium',
    position: 'left',
    children: <Body />,
  },
};

export const LargeImageLeft: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'large',
    position: 'left',
    children: <Body />,
  },
};

export const SmallImageRight: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'small',
    position: 'right',
    children: <Body />,
  },
};

export const MediumImageRight: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'medium',
    position: 'right',
    children: <Body />,
  },
};

export const LargeImageRight: Story = {
  args: {
    as: 'img',
    ...image,
    size: 'large',
    position: 'right',
    children: <Body />,
  },
};

export const ImageAbove: Story = {
  args: {
    as: 'img',
    ...image,
    position: 'above',
    className: 'w-96',
    children: <Body />,
  },
};

export const MediumVideoLeft: Story = {
  args: {
    as: EmbeddedVideo,
    ...video,
    alt: 'te',
    size: 'medium',
    position: 'left',
    children: <Body />,
  },
};

export const LargeVideoLeft: Story = {
  args: {
    as: EmbeddedVideo,
    ...video,
    size: 'large',
    position: 'left',
    children: <Body />,
  },
};

export const MediumVideoRight: Story = {
  args: {
    as: EmbeddedVideo,
    ...video,
    size: 'medium',
    position: 'right',
    children: <Body />,
  },
};

export const LargeVideoRight: Story = {
  args: {
    as: EmbeddedVideo,
    ...video,
    size: 'large',
    position: 'right',
    children: <Body />,
  },
};

export const VideoAbove: Story = {
  args: {
    as: EmbeddedVideo,
    ...video,
    transcript: '',
    position: 'above',
    children: <Body />,
  },
};

export const LightGreyBG: Story = {
  args: {
    as: 'img',
    ...image,
    alt: 'ts',
    transcript: '',
    position: 'above',
    background: 'grey-light',
    className: 'w-96',
    children: <Body />,
  },
};

export const DarkGrayBG: Story = {
  args: {
    as: 'img',
    ...image,
    position: 'above',
    background: 'grey-dark',
    className: 'w-96',
    children: <Body />,
  },
};
