import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
} from '../../../react-components/src/components/accordion/accordion';
import { ComponentType } from 'react';

const config: Meta<typeof Accordion> = {
  title: 'React Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionButton: AccordionButton as ComponentType<unknown>,
    AccordionContent: AccordionContent as ComponentType<unknown>,
  },
  parameters: {
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: ({ ...args }) => (
    <Accordion {...args}>
      <AccordionButton>Example Accordion Button</AccordionButton>
      <AccordionContent>
        Example Accordion Content Quas eum reprehenderit beatae nemo. Natus nihil corrupti. Facere quibusdam velit.
        Veniam magni omnis minus. Eum harum voluptatibus nostrum laborum unde. Deleniti similique magnam error illo
        neque alias eos minus repudiandae.
      </AccordionContent>
    </Accordion>
  ),
};
