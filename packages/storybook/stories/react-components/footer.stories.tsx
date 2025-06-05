import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Footer, FooterLink } from '../../../react-components/src/components/footer/footer';
import '../../../web-components/src/components/uofg-footer/uofg-footer.svelte';

const config: Meta<typeof Footer> = {
  title: 'React Components/Footer',
  component: Footer,
  subcomponents: {
    FooterLink: FooterLink as ComponentType<unknown>,
  },
  parameters: {
    'layout': 'fullscreen',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {
  render: ({ ...args }) => {
    return <Footer {...args}></Footer>;
  },
};

export const WithSubNavigation: Story = {
  render: ({ ...args }) => {
    return (
      <Footer {...args}>
        <FooterLink href="#">Link 1</FooterLink>
        <FooterLink href="#">Link 2</FooterLink>
        <FooterLink href="#">Link 3</FooterLink>
      </Footer>
    );
  },
};
