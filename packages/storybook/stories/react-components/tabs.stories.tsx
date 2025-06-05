import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../../../react-components/src/components/tabs/tabs';

const config: Meta<typeof Tabs> = {
  title: 'React Components/Tabs',
  component: Tabs,
  subcomponents: {
    TabList: TabList as ComponentType<unknown>,
    Tab: Tab as ComponentType<unknown>,
    TabPanels: TabPanels as ComponentType<unknown>,
    TabPanel: TabPanel as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'padded',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return (
      <Tabs {...args}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Content for Tab 1</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tab 2</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tab 3</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
};
