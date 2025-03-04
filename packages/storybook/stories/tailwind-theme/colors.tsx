import { ColorItem, ColorPalette } from '@storybook/blocks';
import * as React from 'react';
import { toTitleCase } from '../../../react-components/src/utils/string-utils';

type Swatches = { [p: string]: string };
type Color = {
  title: string;
  subtitle: string;
  swatches: Swatches;
};

const swatchNames = ['contrast', 'focus', 'on-dark', 'on-light', 'bg'];
const colorNames = [
  'black',
  'white',
  'red',
  'yellow',
  'blue',
  'green',
  'light-grey',
  'dark-grey',
  'body-copy',
  'body-copy-bold',
  'body-copy-link',
];

export const ColorGrid = () => {
  const colors = React.useMemo(() => {
    const styles = window.getComputedStyle(document.documentElement);
    const colors: Color[] = [];

    const getHexValue = (colorName: string) => styles.getPropertyValue(`--tw-color-${colorName}`);

    const getSwatches = (colorName: string) => {
      const swatches = {};

      const baseValue = getHexValue(colorName);

      if (baseValue) {
        swatches['base'] = getHexValue(colorName);
      }

      for (const swatch of swatchNames) {
        const value = getHexValue(`${colorName}-${swatch}`);

        if (value) {
          swatches[swatch] = getHexValue(`${colorName}-${swatch}`);
        }
      }

      return swatches;
    };

    const addColor = (color: Color) => {
      if (Object.keys(color.swatches).length > 0) {
        colors.push(color);
      }
    };

    for (const colorName of colorNames) {
      const title = toTitleCase(colorName);

      addColor({
        title: title,
        subtitle: '',
        swatches: getSwatches(colorName),
      });
    }

    return colors;
  }, []);

  return (
    <ColorPalette>
      {colors.map(color => (
        <ColorItem title={color.title} subtitle={color.subtitle} colors={color.swatches} />
      ))}
    </ColorPalette>
  );
};
