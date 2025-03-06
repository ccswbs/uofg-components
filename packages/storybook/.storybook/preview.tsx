import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import * as React from 'react';
import { ComponentImport } from '../doc-blocks/component-import';
import './index.css';
import theme from './theme';

const preview: Preview = {
  parameters: {
    controls: {
      disableSaveFromUI: true,
      matchers: {
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    docs: {
      theme: { ...theme, fontBase: '"DM Sans", sans-serif' },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ComponentImport />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;
