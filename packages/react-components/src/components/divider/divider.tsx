import { tv } from 'tailwind-variants';

/** Separates content on a page visually */
export const Divider = () => {
  const divider = tv({
    slots: {
      base: 'uog:mx-auto uog:my-7 uog:h-1 uog:w-3/4 uog:border-0 uog:flex',
      red: 'uog:bg-red',
      yellow: 'uog:bg-yellow',
      black: 'uog:bg-black',
      hr: 'uog:border-0',
    },
    compoundSlots: [
      {
        slots: ['red', 'yellow', 'black'],
        class: 'uog:flex-1 uog:h-full',
      },
    ],
  });

  const { base, red, yellow, black, hr } = divider();

  return (
    <>
      <div className={base()}>
        <div className={red()}></div>
        <div className={yellow()}></div>
        <div className={black()}></div>
      </div>
      <hr className={hr()} />
    </>
  );
};
