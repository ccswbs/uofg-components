import { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../../react-components/src/components/card/card';
import { CardContent } from '../../../react-components/src/components/card/card-content';
import { CardTitle } from '../../../react-components/src/components/card/card-title';
import { Container } from '../../../react-components/src/components/container/container';
import { Grid } from '../../../react-components/src/components/grid/grid';

const config: Meta<typeof Grid> = {
  title: 'React Components/Grid',
  component: Grid,
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

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    template: {
      base: ['1fr'],
      sm: ['1fr', '1fr'],
      md: ['1fr', '1fr', '1fr'],
      xl: ['1fr', '1fr', '1fr', '1fr'],
    },
    gap: {
      x: 10,
      y: 10,
    },
  },
  render: ({ ...args }) => {
    return (
      <Container>
        <Grid {...args} className="h-screen">
          {Array.from({ length: 10 }, (_value, index) => (
            <Card className="h-10 w-2/3">
              <CardContent className="h-10 w-2/3 overflow-hidden">
                <CardTitle>Example Grid Item {index + 1}</CardTitle>
                <div>
                  Iusto possimus possimus delectus et. Et aspernatur culpa quis sint at nam voluptatibus. Occaecati
                  perspiciatis ea eius dolorem aliquid. Ad ducimus aut aspernatur. Cumque enim repellat reprehenderit.
                  Similique perspiciatis alias doloremque reprehenderit eum. A laboriosam dolore. Facere possimus qui..
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    );
  },
};
