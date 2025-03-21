import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'University of Guelph Components',
  brandUrl: 'https://uoguelph.ca',
  brandImage: '/logo.svg',
  brandTarget: '_self',
  // Colors
  colorPrimary: '#000',
  colorSecondary: '#e51937',
  // UI
  appBg: '#f5f5f5',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#9E9E9E',
  appBorderRadius: 4,
  // Text colors
  textColor: '#555',
  textInverseColor: '#ffffff',
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
