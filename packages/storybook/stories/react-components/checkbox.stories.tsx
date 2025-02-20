import { Checkbox } from "@uoguelph/react-components";
import { fn } from "@storybook/test";

const config = {
  title: "React Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      toc: true,
    },
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'The background color of the checkbox when it is checked',
      table: {
        type: { summary: "'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white'" },
        defaultValue: { summary: "'red'" },
      },
      control: {
        type: 'select',
      },
      options: ['red', 'yellow', 'blue', 'green', 'light-grey', 'dark-grey', 'black', 'white'],
      defaultValue: 'red',
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the Checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'checked',
      description: 'Whether the Checkbox is checked initially',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: false,
      },
    },
  },
};

export default config;

export const Basic = {
  args: {
    color: "red",
    disabled: false,
    checked: false,
  },
};

export const WithLabel = {
  args: {
    color: "red",
    disabled: false,
    checked: false,
    label: "Example checkbox",
  },
};

export const WithLabelAndDescription = {
  args: {
    color: "red",
    disabled: false,
    checked: false,
    label: "Example checkbox",
    description: "This is a checkbox",
  },
};

export const CheckedByDefault = {
  args: {
    color: "red",
    disabled: false,
    checked: true,
    label: "Example checkbox",
    description: "This is a checkbox",
  },
};

export const DisabledAndUnchecked = {
  args: {
    color: "red",
    disabled: true,
    checked: false,
    label: "Example checkbox",
    description: "This is a checkbox",
  },
};

export const DisabledAndChecked = {
  args: {
    color: "red",
    disabled: true,
    checked: true,
    label: "Example checkbox",
    description: "This is a checkbox",
  },
};
