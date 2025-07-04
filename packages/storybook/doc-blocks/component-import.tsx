import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Source, useOf } from '@storybook/addon-docs/blocks';
import { tv } from 'tailwind-variants';

export const ComponentImport = ({ of }: { of?: any }) => {
  const tabs = tv({
    slots: {
      group: 'group',
      list: 'mb-2 flex gap-2',
      tab: 'cursor-pointer border-b-2 border-transparent px-4 py-2 text-sm font-medium focus:outline-none data-[selected]:border-red',
      panels: '',
      panel: '',
    },
  })();

  const resolvedOf = useOf(of ?? 'meta', ['meta']);
  if ('import' in resolvedOf.preparedMeta.parameters) {
    return <Source code={resolvedOf.preparedMeta.parameters.import} />;
  }

  const title = resolvedOf.preparedMeta.title;

  const lib = title.includes('React Components') ? 'react-components' : 'web-components';
  const component = title.replace('React Components/', '').replace('Web Components/', '');

  if (lib === 'web-components') {
    return (
      <TabGroup className={tabs.group()}>
        <TabList className={tabs.list()}>
          <Tab className={tabs.tab()}>Latest v2 (recommended)</Tab>
          <Tab className={tabs.tab()}>Latest</Tab>
          <Tab className={tabs.tab()}>Test Version</Tab>
        </TabList>
        <TabPanels className={tabs.panels()}>
          <TabPanel className={tabs.panel()}>
            <Source
              code={`<script src="https://cdn.jsdelivr.net/npm/@uoguelph/web-components@2.x.x/dist/uofg-web-components/uofg-${component.toLowerCase()}.esm.js" type="module"></script>`}
            />
          </TabPanel>
          <TabPanel className={tabs.panel()}>
            <Source
              code={`<script src="https://cdn.jsdelivr.net/npm/@uoguelph/web-components/dist/uofg-web-components/uofg-${component.toLowerCase()}.esm.js" type="module"></script>`}
            />
          </TabPanel>
          <TabPanel className={tabs.panel()}>
            <Source
              code={`<script src="https://cdn.jsdelivr.net/npm/@uoguelph/web-components@rc/dist/uofg-web-components/uofg-${component.toLowerCase()}.esm.js" type="module"></script>`}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
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
