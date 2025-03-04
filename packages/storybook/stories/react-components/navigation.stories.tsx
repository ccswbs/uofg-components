import { Navigation } from '../../../react-components/src/components/navigation/navigation';

const config = {
  title: 'React Components/Navigation',
  component: Navigation,
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
    links: [
      {
        href: '/example-page-1',
        text: 'Example Page 1',
      },
      {
        href: '/example-page-2',
        text: 'Example Page 2',
      },
      {
        href: '/example-page-3',
        text: 'Example Page 3',
      },
      {
        href: '/example-page-4',
        text: 'Example Page 4',
      },
    ],
    fullWidth: false,
  },
};

export const FullWidth = {
  args: {
    links: [
      {
        href: '/example-page-1',
        text: 'Example Page 1',
      },
      {
        href: '/example-page-2',
        text: 'Example Page 2',
      },
      {
        href: '/example-page-3',
        text: 'Example Page 3',
      },
      {
        href: '/example-page-4',
        text: 'Example Page 4',
      },
    ],
    fullWidth: true,
  },
};

export const Active = {
  args: {
    links: [
      {
        href: '/example-page-1',
        text: 'Example Page 1',
        active: true,
      },
      {
        href: '/example-page-2',
        text: 'Example Page 2',
      },
      {
        href: '/example-page-3',
        text: 'Example Page 3',
      },
      {
        href: '/example-page-4',
        text: 'Example Page 4',
      },
    ],
    fullWidth: true,
  },
};
