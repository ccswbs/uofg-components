import { ColorItem, ColorPalette } from '@storybook/blocks';
import * as React from 'react';
import { toTitleCase } from '../../../react-components/src/utils/string-utils';

type Swatches = { [key: string]: string };
type Color = {
  title: string;
  subtitle: string;
  swatches: Swatches;
};

const swatchNames = ['focus', 'on-dark', 'on-light', 'bg', 'contrast'];
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

    const getHexValue = (colorName: string) => styles.getPropertyValue(`--uog-color-${colorName}`);

    const getSwatches = (colorName: string) => {
      const swatches: Swatches = {};

      const baseValue = getHexValue(colorName);

      if (baseValue) {
        swatches[`base\nvar(--uog-color-${colorName})`] = getHexValue(colorName);
      }

      for (const swatch of swatchNames) {
        const value = getHexValue(`${colorName}-${swatch}`);

        if (value) {
          swatches[`${swatch}\nvar(--uog-color-${colorName}-${swatch})`] = getHexValue(`${colorName}-${swatch}`);
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

      if (colorName === 'body-copy-bold') {
        console.log(getHexValue('body-copy-bold'));
      }

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
      {/* This is to force colors in the palette that aren't used to be added to the page. */}
      <span className="uog:hidden uog:text-body-copy-bold-on-dark">test</span>
      <span className="uog:hidden uog:text-body-copy-on-light">test</span>
      <span className="uog:hidden uog:text-red-on-light">test</span>
      <span className="uog:hidden uog:text-yellow-on-dark">test</span>
      <span className="uog:hidden uog:text-green-on-light">test</span>
      {colors.map(color => (
        <ColorItem key={color.title} title={color.title} subtitle={color.subtitle} colors={color.swatches} />
      ))}
    </ColorPalette>
  );
};
