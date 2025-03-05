import { Source, useOf } from '@storybook/blocks';
import * as React from 'react';

export const ComponentImport = ({ of }: { of?: any }) => {
  const resolvedOf = useOf(of ?? 'meta', ['meta']);
  const title = resolvedOf.preparedMeta.title;

  const lib = title.includes('React Components') ? 'react-components' : 'web-components';

  if (lib === 'web-components') {
    return <></>;
  }

  const component = title.replace('React Components/', '');
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
