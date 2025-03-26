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
  argTypes: {
    'variant': {
      type: { name: 'string', required: false },
      description: 'The variant of the header',
      control: false,
      table: {
        type: {
          optional: false,
          summary: '"dual-brand"',
        },
      },
    },
    'page-title': {
      type: { name: 'string', required: false },
      description: 'The title of the department/topic that the header is being used for.',
      control: false,
    },
    'page-url': {
      type: { name: 'string', required: false },
      description: 'The URL to the home/landing page of the department/topic the header is being used for.',
      control: false,
    },
  },
};

export default config;

export const Basic = {
  render: ({}) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header></uofg-header>
  ),
};

export const WithPageTitle = {
  parameters: {
    docs: {
      description: {
        story:
          'Sometimes the header is being used on pages that belong together in a group, or are being used in web pages that belong to a specific department of the University. In these cases the header provides a way to make it clear to the end user that these pages belong together by showing the name of the department/topic in the sub navigation.',
      },
    },
  },
  render: ({}) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Page Title"></uofg-header>
  ),
};

export const WithPageLink = {
  parameters: {
    docs: {
      description: {
        story:
          'Sometimes the header is being used on pages that belong together in a group, or are being used in web pages that belong to a specific department of the University. In these cases the header provides a way to make it clear to the end user that these pages belong together by showing the name of the department/topic in the sub navigation.',
      },
    },
  },
  render: ({}) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Page Title" page-url="#example"></uofg-header>
  ),
};

export const WithSubNavigation = {
  parameters: {
    docs: {
      description: {
        story:
          'The header also allows for a collection of links and dropdowns to be displayed within the sub navigation. This pairs well with the topic/category title, allowing for a more detailed navigation experience.',
      },
    },
  },
  render: ({}) => (
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
  parameters: {
    docs: {
      description: {
        story:
          'Sometimes you may have several links and menus within the sub-navigation. Normally, this would cause overflow on desktop. The header will detect when it overflows and switch the desktop sub-navigation to show a menu containing all the sub navigation items similar to how it does on mobile.',
      },
    },
  },
  render: ({}) => (
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
  parameters: {
    docs: {
      description: {
        story:
          'A simplfied version of the header, with both the University of Guelph and the University of Guelph-Humber logos. This is currently only used in Slate forms.',
      },
    },
  },
  render: ({}) => (
    // @ts-expect-error Svelte will define the custom element, so we can ignore the error
    <uofg-header page-title="Example Topic/Department" variant="dual-brand"></uofg-header>
  ),
};
