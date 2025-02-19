import { useOf } from '@storybook/blocks';
import * as React from 'react';
import { Source } from '@storybook/blocks';

export const ComponentImport = ({ of }: { of?: any }) => {
  const resolvedOf = useOf(of ?? 'meta', ['meta']);
  const title = resolvedOf.preparedMeta.title;

  const lib = title.includes('React Components') ? 'react-components' : 'web-components';
  const component = title.replace('React Components/', '').replace('Web Components/', '');

  return <Source code={`import { ${component} } from '@uoguelph/${lib}';`} />;
};
