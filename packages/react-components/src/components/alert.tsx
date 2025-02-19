import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';

export type AlertProps = {
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'grey' | 'black' | 'white';
  title: ReactNode;
  subtitle: ReactNode;
  message: ReactNode;
  footer?: ReactNode;
};
export function Alert({ color = 'red', title, subtitle, message, footer }: AlertProps) {
  const card = tv({
    slots: {
      base: 'flex flex-col',
      titleContainer: 'flex items-center gap-2 p-4 text-xl',
      titleIcon: 'h-[1.5em]',
      titleText: '',
      messageContainer: 'flex flex-col border-x border-b border-grey-light bg-white px-4 py-3',
      subtitle: 'font-bold mb-4 text-xl',
      message: 'text-lg',
      footer: 'flex bg-grey-light px-4 py-2',
    },
    variants: {
      color: {
        red: {
          titleContainer: 'bg-red text-red-contrast',
        },
        yellow: {
          titleContainer: 'bg-yellow text-yellow-contrast',
        },
        blue: {
          titleContainer: 'bg-blue text-blue-contrast',
        },
        green: {
          titleContainer: 'bg-green text-green-contrast',
        },
        grey: {
          titleContainer: 'bg-grey text-grey-contrast',
        },
        black: {
          titleContainer: 'bg-black text-black-contrast',
        },
        white: {
          titleContainer: 'bg-white text-white-contrast',
        },
      },
    },
  });

  const {
    base,
    titleContainer,
    titleIcon,
    titleText,
    messageContainer,
    message: messageClasses,
    subtitle: subtitleClasses,
    footer: footerClasses,
  } = card({ color });

  return (
    <div className={base()}>
      <div className={titleContainer()}>
        <FontAwesomeIcon className={titleIcon()} icon={faCircleExclamation} />
        <span className={titleText()}>{title}</span>
      </div>

      <div className={messageContainer()}>
        <span className={subtitleClasses()}>{subtitle}</span>
        <span className={messageClasses()}>{message}</span>
      </div>

      {footer && <div className={footerClasses()}>{footer}</div>}
    </div>
  );
}

Alert.displayName = 'Alert';
