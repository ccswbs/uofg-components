import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
} from '../../../react-components/src/components/accordion/accordion';
import { Link } from '../../../react-components/src/components/link/link';

const config: Meta<typeof Accordion> = {
  title: 'React Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionButton: AccordionButton as ComponentType<unknown>,
    AccordionContent: AccordionContent as ComponentType<unknown>,
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

export const WithAnchorLink: Story = {
  render: ({ ...args }) => (
    <>
      <Link href="#example-accordion">Open accordion via anchor link</Link>
      <Accordion {...args} id="example-accordion">
        <AccordionButton>Example Accordion Button</AccordionButton>
        <AccordionContent>
          Example Accordion Content Quas eum reprehenderit beatae nemo. Natus nihil corrupti. Facere quibusdam velit.
          Veniam magni omnis minus. Eum harum voluptatibus nostrum laborum unde. Deleniti similique magnam error illo
          neque alias eos minus repudiandae.
        </AccordionContent>
      </Accordion>
    </>
  ),
};