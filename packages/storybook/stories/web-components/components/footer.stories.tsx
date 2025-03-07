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
  render: () => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-footer>
      {/* @ts-expect-error Svelte will define the custom element, so we can ignore the error */}
    </uofg-footer>
  ),
};

export const WithLinks = {
  parameters: {
    docs: {
      description: {
        story: 'The footer also allows for a collection of links to be displayed above the main footer content.',
      },
    },
  },
  render: () => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-footer>
      <a href="#example">Example Menu Link</a>
      <a href="#example">Example Menu Link 1</a>
      <a href="#example">Example Menu Link 2</a>
      <a href="#example">Example Menu Link 3</a>
      <a href="#example">Example Menu Link 4</a>
      <a href="#example">Example Menu Link 5</a>
      <a href="#example">Example Menu Link 6</a>
      {/* @ts-expect-error Svelte will define the custom element, so we can ignore the error */}
    </uofg-footer>
  ),
};
