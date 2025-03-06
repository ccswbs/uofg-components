import { Source, useOf } from '@storybook/blocks';
import * as React from 'react';

export const ComponentImport = ({ of }: { of?: any }) => {
  const resolvedOf = useOf(of ?? 'meta', ['meta']);
  if ('import' in resolvedOf.preparedMeta.parameters) {
    return <Source code={resolvedOf.preparedMeta.parameters.import} />;
  }

  const title = resolvedOf.preparedMeta.title;

  const lib = title.includes('React Components') ? 'react-components' : 'web-components';
  const component = title.replace('React Components/', '').replace('Web Components/', '');

  if (lib === 'web-components') {
    return (
      <Source
        code={`<script src="https://cdn.jsdelivr.net/npm/@uoguelph/web-components@1.x.x/dist/uofg-web-components/uofg-${component.toLowerCase()}.esm.js">`}
      />
    );
  }

  const subpath = component.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const subcomponents = resolvedOf.preparedMeta.subcomponents;

  if (subcomponents) {
    return (
      <Source
        code={`import { ${component}, ${Object.keys(subcomponents).join(', ')} } from '@uoguelph/${lib}/${subpath}';`}
      />
    );
  }

  return <Source code={`import { ${component} } from '@uoguelph/${lib}/${subpath}';`} />;
};
