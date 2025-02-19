import './index.css';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import { ComponentImport } from '../doc-blocks/component-import';
import * as React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
