import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../react-components/src/components/button/button';
import { toast, Toaster } from '../../../react-components/src/components/toaster/toaster';

const config: Meta<typeof Toaster> = {
  title: 'React Components/Toaster',
  component: Toaster,
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

type Story = StoryObj<typeof Toaster>;

export const Basic: Story = {
  render: () => {
    return (
      <div>
        <Toaster />

        <div className="flex flex-col gap-2">
          <Button type="button" onClick={() => toast.info('This is an example info toast')}>
            Add info toast
          </Button>

          <Button type="button" onClick={() => toast.success('This is an example success toast')}>
            Add success toast
          </Button>

          <Button type="button" onClick={() => toast.error('This is an example error toast')}>
            Add error toast
          </Button>

          <Button type="button" onClick={() => toast.warning('This is an example warning toast')}>
            Add warning toast
          </Button>
        </div>
      </div>
    );
  },
};
