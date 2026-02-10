import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Figure, FigureCaption, FigureImage } from '../../../react-components/src/components/figure/figure';
import { Typography } from '../../../react-components/src/components/typography/typography';

const config: Meta<typeof Figure> = {
  title: 'React Components/Figure',
  component: Figure,
  subcomponents: {
    FigureImage: FigureImage as ComponentType<unknown>,
    FigureCaption: FigureCaption as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Figure>;
export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
        <Figure {...args}>
          <FigureImage src="https://picsum.photos/300/200" alt="Placeholder image" width="300" height="200" />
        </Figure>{' '}
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
      </>
    );
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
  },
  render: ({ ...args }) => {
    return (
      <>
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
        <Figure {...args}>
          <FigureImage src="https://picsum.photos/300/200" alt="Placeholder image" width="300" height="200" />
        </Figure>{' '}
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
      </>
    );
  },
};

export const WithCaption: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
        <Figure {...args}>
          <FigureImage src="https://picsum.photos/300/200" alt="Placeholder image" width="300" height="200" />
          <FigureCaption>Example Figure caption</FigureCaption>
        </Figure>{' '}
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
      </>
    );
  },
};

export const WithLongCaption: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
        <Figure {...args}>
          <FigureImage src="https://picsum.photos/300/200" alt="Placeholder image" width="300" height="200" />
          <FigureCaption>
            Long Figure caption Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adi
          </FigureCaption>
        </Figure>{' '}
        <Typography type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
          ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
          adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam
          nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
          Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent
          egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris
          sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </Typography>
      </>
    );
  },
};
