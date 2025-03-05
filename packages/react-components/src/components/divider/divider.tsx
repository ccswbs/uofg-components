import { tv } from 'tailwind-variants';

/** Separates content on a page visually */
export const Divider = () => {
  const divider = tv({
    slots: {
      base: 'tw:mx-auto tw:my-7 tw:h-1 tw:w-3/4 tw:border-0 tw:flex',
      red: 'tw:bg-red',
      yellow: 'tw:bg-yellow',
      black: 'tw:bg-black',
      hr: 'tw:border-0',
    },
    compoundSlots: [
      {
        slots: ['red', 'yellow', 'black'],
        class: 'tw:flex-1 tw:h-full',
      },
    ],
  });

  const { base, red, yellow, black, hr } = divider();

  return (
    <>
      <div className={base()}>
        <div className={black()}></div>
        <div className={red()}></div>
        <div className={yellow()}></div>
      </div>
      <hr className={hr()} />
    </>
  );
};
