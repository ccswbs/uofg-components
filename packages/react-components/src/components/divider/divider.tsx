import { tv } from 'tailwind-variants';

/** Separates content on a page visually */
export const Divider = () => {
  const divider = tv({
    slots: {
      base: 'mx-auto my-7 flex h-1 w-3/4 border-0',
      red: 'bg-red',
      yellow: 'bg-yellow',
      black: 'bg-black',
      hr: 'border-0',
    },
    compoundSlots: [
      {
        slots: ['red', 'yellow', 'black'],
        class: 'h-full flex-1',
      },
    ],
  });

  const { base, red, yellow, black, hr } = divider();

  return (
    <>
      <div className={`uofg-divider ${base()}`}>
        <div className={red()}></div>
        <div className={yellow()}></div>
        <div className={black()}></div>
      </div>
      <hr className={hr()} />
    </>
  );
};
