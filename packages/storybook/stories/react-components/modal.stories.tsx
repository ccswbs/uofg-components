import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../../react-components/src/components/button/button';
import { Modal } from '../../../react-components/src/components/modal/modal';

const config: Meta<typeof Modal> = {
  title: 'React Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'children',
      description: 'The content of the modal',
      table: { type: { summary: 'React.ReactNode?' } },
      control: false,
    },
    open: {
      name: 'open',
      description: 'Controls whether the modal is open or closed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: false,
    },
    onClose: {
      name: 'onClose',
      description: 'A callback function for when the user is dismissing the modal',
      table: { type: { summary: '() => void)' } },
      control: false,
    },
    centered: {
      name: 'centered',
      description: 'Whether the content should be centered vertically',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    Story => {
      const [args, updateArgs, resetArgs] = useArgs();

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
    children: <div className="tw:bg-white tw:p-4">Whatever content you want here</div>,
    open: false,
  },
};
