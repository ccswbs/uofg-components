import { useArgs } from 'storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../react-components/src/components/button/button';
import { Modal } from '../../../react-components/src/components/modal/modal';

const config: Meta<typeof Modal> = {
  title: 'React Components/Modal',
  component: Modal,
  parameters: {
    'layout': 'centered',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
  decorators: [
    Story => {
      const [args, updateArgs, _resetArgs] = useArgs();

      return (
        <>
          <Button
            color="red"
            onClick={() => {
              updateArgs({ ...args, open: true, onClose: () => updateArgs({ ...args, open: false }) });
            }}
          >
            Open Modal
          </Button>

          <Story />
        </>
      );
    },
  ],
};

export default config;

type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  args: {
    children: <div className="uog:bg-white uog:p-4">Whatever content you want here</div>,
    open: false,
  },
};
