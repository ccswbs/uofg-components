import { Container } from '../../../react-components/src/components/container/container';

const config = {
  title: 'React Components/Container',
  component: Container,
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

export const Default = {
  args: {
    centered: false,
    children: <div>Whatever content you want here</div>,
  },
};

export const Centered = {
  args: {
    centered: true,
    children: <div>Whatever content you want here</div>,
  },
};
