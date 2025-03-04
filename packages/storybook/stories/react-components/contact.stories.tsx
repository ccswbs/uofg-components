import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Contact,
  ContactTitle,
  ContactName,
  ContactPhone,
  ContactEmail,
} from '../../../react-components/src/components/contact/contact';
import { ComponentType } from 'react';

const config: Meta<typeof Contact> = {
  title: 'React Components/Contact',
  component: Contact,
  subcomponents: {
    ContactTitle: ContactTitle as ComponentType<unknown>,
    ContactName: ContactName as ComponentType<unknown>,
    ContactPhone: ContactPhone as ComponentType<unknown>,
    ContactEmail: ContactEmail as ComponentType<unknown>,
  },
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Contact>;
export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Contact {...args}>
        <ContactName>Example Name</ContactName>
        <ContactTitle>Example Title</ContactTitle>
        <ContactPhone number="123-456-7890" />
        <ContactEmail email="example@example.com" />
      </Contact>
    );
  },
};

export const WithPhoneExtension: Story = {
  render: ({ ...args }) => {
    return (
      <Contact {...args}>
        <ContactName>Example Name</ContactName>
        <ContactTitle>Example Title</ContactTitle>
        <ContactPhone number="123-456-7890" extension="123123" />
        <ContactEmail email="example@example.com" />
      </Contact>
    );
  },
};
