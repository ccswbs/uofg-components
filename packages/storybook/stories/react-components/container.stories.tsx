import { Container } from '../../../react-components/src/components/container/container';

const config = {
  title: 'React Components/Container',
  component: Container,
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

export const Default = {
  render: ({ ...args }) => {
    return (
      <Container {...args}>
        <div className="uog:bg-grey-light-bg uog:p-4">Whatever content you want here</div>
      </Container>
    );
  },
};
