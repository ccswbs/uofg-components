import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../react-components/src/components/button/button';

const config: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

// Red Button Stories
export const Basic: Story = {
  args: {
    color: 'red',
    children: 'Example Button',
  },
};

export const Outlined: Story = {
  args: {
    color: 'red',
    outlined: true,
    children: 'Example Outlined Button',
  },
};

export const Disabled: Story = {
  args: {
    color: 'red',
    disabled: true,
    children: 'Example Disabled Button',
  },
};

export const AsALink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Example Link Button',
  },
};

export const PrimaryAndSecondary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The primary and secondary colors are special, they are used in situations where you want the button to react to changes in the Tailwind theme. For example, the primary button is red when the Tailwind theme is light and yellow when the theme is dark. (Note, by default you can change the theme by adding the class "dark" on any parent of the button or the button itself)',
      },
    },
  },
  render: ({ ...args }) => (
    <>
      <div className="grid grid-cols-2 gap-2 p-2">
        <Button {...args} color="primary">
          Primary Light
        </Button>
        <Button {...args} color="secondary">
          Secondary Light
        </Button>
      </div>
      <div className="dark grid grid-cols-2 gap-2 bg-grey-dark-bg p-2">
        <Button {...args} color="primary">
          Primary Dark
        </Button>
        <Button {...args} color="secondary">
          Secondary Dark
        </Button>
      </div>
    </>
  ),
};
