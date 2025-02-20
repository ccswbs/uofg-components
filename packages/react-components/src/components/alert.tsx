import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';

export type AlertProps = {
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'light-grey' | 'dark-grey' | 'black' | 'white';
  title: ReactNode;
  subtitle: ReactNode;
  message: ReactNode;
  footer?: ReactNode;
};
export function Alert({ color = 'red', title, subtitle, message, footer }: AlertProps) {
  const card = tv({
    slots: {
      base: 'tw:flex tw:flex-col',
      titleContainer: 'tw:flex tw:items-center tw:gap-2 tw:p-4 tw:text-xl',
      titleIcon: 'tw:h-[1.5em]',
      titleText: '',
      messageContainer: 'tw:flex tw:flex-col tw:border-x tw:border-b tw:border-light-grey tw:bg-white tw:px-4 tw:py-3',
      subtitle: 'tw:font-bold tw:mb-4 tw:text-xl',
      message: 'tw:text-lg',
      footer: 'tw:flex tw:bg-light-grey tw:px-4 tw:py-2',
    },
    variants: {
      color: {
        'red': {
          titleContainer: 'tw:bg-red tw:text-red-contrast',
        },
        'yellow': {
          titleContainer: 'tw:bg-yellow tw:text-yellow-contrast',
        },
        'blue': {
          titleContainer: 'tw:bg-blue tw:text-blue-contrast',
        },
        'green': {
          titleContainer: 'tw:bg-green tw:text-green-contrast',
        },
        'light-grey': {
          titleContainer: 'tw:bg-light-grey tw:text-light-grey-contrast',
        },
        'dark-grey': {
          titleContainer: 'tw:bg-dark-grey tw:text-dark-grey-contrast',
        },
        'black': {
          titleContainer: 'tw:bg-black tw:text-black-contrast',
        },
        'white': {
          titleContainer: 'tw:bg-white tw:text-white-contrast',
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
