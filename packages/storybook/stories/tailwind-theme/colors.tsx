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
      const swatches: Swatch[] = [];

      const baseValue = getHexValue(colorName);

      if (baseValue) {
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

      if (colorName === 'body-copy-bold') {
        console.log(getHexValue('body-copy-bold'));
      }

      addColor({
        name: title,
        swatches: getSwatches(colorName),
      });
    }

    return colors;
  }, []);

  return (
    <div className="uog:flex uog:flex-col uog:gap-4">
      {colors.map(color => (
        <>
          <span className="uog:font-bold uog:text-xs">{color.name}</span>
          <div className="uog:flex uog:gap-2">
            {color.swatches.map(swatch => (
              <div className="uog:flex-1 uog:border uog:border-black/10">
                <div
                  className="uog:h-15 uog:border-b uog:border-black/10"
                  style={{
                    backgroundColor: swatch.hex,
                  }}
                ></div>
                <div className="uog:flex uog:flex-col uog:gap-0 uog:items-center uog:justify-center uog:text-center">
                  <p className="uog:m-0! uog:capitalize">{swatch.name}</p>
                  <p className="uog:m-0!">{swatch.variable}</p>
                  <p className="uog:m-0!">{swatch.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
