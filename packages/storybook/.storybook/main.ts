import { join, dirname } from 'path';
import { StorybookConfig } from '@storybook/react-vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is necessary in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../stories/introduction.mdx', '../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-backgrounds'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: '@storybook/addon-postcss',
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  previewHead: head => `
    ${head}
    <script src="https://kit.fontawesome.com/7993323d0c.js" crossorigin="anonymous"></script>
  `,
};
export default config;
