import * as React from 'react';
import { ColorItem, ColorPalette } from '@storybook/blocks';
import { toTitleCase } from '@uoguelph/react-components';

type Swatches = { [p: string]: string };
type Color = {
  title: string;
  subtitle: string;
  swatches: Swatches;
};

const swatchNames = ['bg', 'contrast', 'focus', 'on-dark', 'on-light'];
const variantNames = ['light', 'dark'];
const colorNames = ['red', 'yellow', 'blue', 'green', 'grey', 'black'];

export const ColorGrid = () => {
  const colors = React.useMemo(() => {
    const styles = window.getComputedStyle(document.documentElement);
    const colors: Color[] = [];

    const getHexValue = (colorName: string) => styles.getPropertyValue(`--color-${colorName}`);

    const getSwatches = (colorName: string) => {
      const swatches = {};

      swatches['base'] = getHexValue(colorName);

      for (const swatch of swatchNames) {
        swatches[swatch] = getHexValue(`${colorName}-${swatch}`);
      }

      return swatches;
    };

    for (const colorName of colorNames) {
      const title = toTitleCase(colorName);

      colors.push({
        title: title,
        subtitle: `The University of Guelph brand compliant ${colorName}`,
        swatches: getSwatches(colorName),
      });

      for (const variant of variantNames) {
        const colorTitle = toTitleCase(colorName);
        const variantTitle = toTitleCase(variant);

        colors.push({
          title: `${colorTitle} ${variantTitle}`,
          subtitle: `A ${variant}er of the University of Guelph ${colorName}`,
          swatches: getSwatches(`${colorName}-${variant}`),
        });
      }
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
