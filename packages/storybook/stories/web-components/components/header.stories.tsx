import '../../../../web-components/src/components/uofg-header/uofg-header.svelte';

const config = {
  title: 'Web Components/Header',
  component: 'uofg-header',
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
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header></uofg-header>
  ),
};

export const WithPageTitle = {
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Page Title"></uofg-header>
  ),
};

export const WithPageLink = {
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Page Title" page-url="#example"></uofg-header>
  ),
};

export const WithSubNavigation = {
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Topic/Department">
      <a href="#example">Example Link</a>
      <a href="#example">Example Link 2</a>

      <ul data-title="Example Menu">
        <li>
          <a href="#example">Example Menu Link 1</a>
        </li>
        <li>
          <a href="#example">This is a really long Example Menu Link 2</a>
        </li>
        <li>
          <a href="#example">Example Menu Link 3</a>
        </li>
      </ul>
      {/* @ts-expect-error Svelte will define the custom element, so we can ignore the error */}
    </uofg-header>
  ),
};

export const WithOverflowingSubNavigation = {
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Topic/Department">
      <a href="#example">Example Link</a>
      <a href="#example">Example Link 2</a>

      <ul data-title="Example Menu">
        <li>
          <a href="#example">Example Menu Link 1</a>
        </li>
        <li>
          <a href="#example">This is a really long Example Menu Link 2</a>
        </li>
        <li>
          <a href="#example">Example Menu Link 3</a>
        </li>
      </ul>

      <a href="#example">This is a really long Example Link 3</a>
      <a href="#example">This is a really long Example Link 4</a>
      <a href="#example">This is a really long Example Link 5</a>
      {/* @ts-expect-error Svelte will define the custom element, so we can ignore the error */}
    </uofg-header>
  ),
};

export const DualBrand = {
  render: ({ ...args }) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Topic/Department" variant="dual-brand"></uofg-header>
  ),
};
