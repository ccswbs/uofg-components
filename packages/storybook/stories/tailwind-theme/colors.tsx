import * as React from 'react';
import { toTitleCase } from '../../../react-components/src/utils/string-utils';

type Swatch = {
  name: string;
  hex: string;
  variable: string;
};

type Color = {
  name: string;
  swatches: Swatch[];
};

const swatchNames = ['focus', 'on-dark', 'on-light', 'bg', 'contrast'];
const colorNames = [
  'black',
  'white',
  'red',
  'yellow',
  'blue',
  'green',
  'grey-light',
  'grey-dark',
  'body-copy',
  'body-copy-bold',
  'body-copy-link',
];

export const ColorGrid = () => {
  const colors = React.useMemo(() => {
    const styles = window.getComputedStyle(document.documentElement);
    const colors: Color[] = [];

    const getHexValue = (colorName: string) => styles.getPropertyValue(`--color-${colorName}`);

    const getSwatches = (colorName: string) => {
      const swatches: Swatch[] = [];

      const baseValue = getHexValue(colorName);

      if (baseValue && colorName !== 'grey-light' && colorName !== 'grey-dark') {
        swatches.push({
          // @ts-ignore
          name: colorName.replaceAll('-', ' '),
          hex: getHexValue(colorName),
          variable: `--uog-color-${colorName}`,
        });
      }

      for (const swatch of swatchNames) {
        const value = getHexValue(`${colorName}-${swatch}`);

        if (value) {
          swatches.push({
            // @ts-ignore
            name: `${colorName} ${swatch}`.replaceAll('-', ' ').replace('bg', 'BG'),
            hex: value,
            variable: `--uog-color-${colorName}-${swatch}`,
          });
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
        name: title,
        swatches: getSwatches(colorName),
      });
    }

    return colors;
  }, []);

  /*
    text-body-copy-bold-on-dark
    text-body-copy-bold-on-light
    text-body-copy-on-light
    text-red-on-light
    text-yellow-on-dark
    text-green-on-light
  */

  return (
    <div className="flex flex-col gap-4">
      {colors.map(color => (
        <>
          <span className="text-xs font-bold">
            {color.name === 'Grey Light' ?
              'Light Background'
            : color.name === 'Grey Dark' ?
              'Dark Background'
            : color.name}
          </span>
          <div className="flex gap-2">
            {color.swatches.map(swatch => (
              <div className="flex-1 border border-black/10">
                <div
                  className="h-15 border-b border-black/10"
                  style={{
                    backgroundColor: swatch.hex,
                  }}
                ></div>
                <div className="flex flex-col items-center justify-center gap-0 text-center">
                  <p className="m-0! capitalize">{swatch.name}</p>
                  <p className="m-0!">{swatch.variable}</p>
                  <p className="m-0!">{swatch.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
