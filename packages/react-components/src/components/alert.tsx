import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { twJoin } from 'tailwind-merge';

export type AlertProps = {
  type?: 'danger' | 'warning' | 'info';
  title: ReactNode;
  subtitle: ReactNode;
  message: ReactNode;
  footer?: ReactNode;
};
export const Alert: FC<AlertProps> = ({ type = 'danger', title, subtitle, message, footer }) => (
  <div className="flex flex-col">
    <div
      className={twJoin(
        'flex items-center gap-2 p-4 text-xl',
        type === 'danger' && 'bg-red text-white',
        type === 'warning' && 'bg-yellow text-black',
        type === 'info' && 'bg-blue text-white',
      )}
    >
      <FontAwesomeIcon className="h-[1.5em]" icon={faCircleExclamation} />
      <span>{title}</span>
    </div>

    <div className={`flex flex-col border-x border-b border-grey-light bg-white px-4 py-3`}>
      <span className="font-bold mb-4 text-xl">{subtitle}</span>
      <span className="text-lg">{message}</span>
    </div>

    {footer && <div className="flex bg-grey-light px-4 py-2">{footer}</div>}
  </div>
);

Alert.displayName = 'Alert';
