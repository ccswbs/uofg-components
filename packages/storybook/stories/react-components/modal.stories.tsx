import * as React from 'react';
import { Button, Modal } from '@uoguelph/react-components';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

const config: Meta<typeof Modal> = {
  title: 'React Components/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
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
    centered: {
      name: 'centered',
      description: 'Whether the content should be centered',
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
