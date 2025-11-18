import '../../../../web-components/src/components/uofg-footer/uofg-footer.svelte';

const config = {
  title: 'Web Components/Footer',
  component: 'uofg-footer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: true,
    },
  },
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the footer',
      control: false,
      table: {
        type: {
          optional: false,
          summary: '"ridgetown"',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default config;

export const Basic = {
  parameters: {
    docs: {
      description: {
        story:
          'The footer component is used to display the footer of a page. It contains links to various resources and information about the University of Guelph.',
      },
    },
  },
  render: ({}) => <uofg-footer></uofg-footer>,
};

export const WithLinks = {
  parameters: {
    docs: {
      description: {
        story: 'The footer also allows for a collection of links to be displayed above the main footer content.',
      },
    },
  },
  render: ({}) => (
    <uofg-footer>
      <a href="#example">Example Menu Link</a>
      <a href="#example">Example Menu Link 1</a>
      <a href="#example">Example Menu Link 2</a>
      <a href="#example">Example Menu Link 3</a>
      <a href="#example">Example Menu Link 4</a>
      <a href="#example">Example Menu Link 5</a>
      <a href="#example">Example Menu Link 6</a>
    </uofg-footer>
  ),
};

export const Ridgetown = {
  parameters: {
    docs: {
      description: {
        story: 'The footer has a special variant for the University of Guelph Ridgetown campus.',
      },
    },
  },
  render: ({}) => <uofg-footer variant="ridgetown"></uofg-footer>,
};
