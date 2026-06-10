import { Meta, StoryObj } from '@storybook/react-vite';
import { ReactNode } from 'react';
import { Button } from '../../../react-components/src/components/button/button';
import { ToasterProvider, useToaster } from '../../../react-components/src/components/toaster/toaster';

const config: Meta<typeof ToasterProvider> = {
  title: 'React Components/Toaster',
  component: ToasterProvider,
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

type Story = StoryObj<typeof ToasterProvider>;

function ToasterTester({ children }: { children?: ReactNode }) {
  const ctx = useToaster();

  return (
    <div className="flex flex-col gap-2">
      <Button type="button" onClick={() => ctx.addToast('This is an example info toast', 'info', 3000)}>
        Add info toast
      </Button>

      <Button type="button" onClick={() => ctx.addToast('This is an example success toast', 'success', 3000)}>
        Add success toast
      </Button>

      <Button type="button" onClick={() => ctx.addToast('This is an example error toast', 'error', 3000)}>
        Add error toast
      </Button>

      <Button type="button" onClick={() => ctx.addToast('This is an example warning toast', 'warning', 3000)}>
        Add warning toast
      </Button>

      {children}
    </div>
  );
}

export const Basic: Story = {
  render: ({ ...args }) => {
    return (
      <ToasterProvider>
        <ToasterTester>{args.children}</ToasterTester>
      </ToasterProvider>
    );
  },
};
