import { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '../../../react-components/src/components/pagination/pagination';

const config: Meta<typeof Pagination> = {
  title: 'React Components/Pagination',
  component: Pagination,
  parameters: {
    'layout': 'padded',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    count: 23,
    visible: 5,
    onChange: page => {
      console.log(page);
    },
  },
};
