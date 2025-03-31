import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import * as React from 'react';
import { Banner } from '../doc-blocks/banner';
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
          <Banner />
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

  tags: ['autodocs']
};

export default preview;
