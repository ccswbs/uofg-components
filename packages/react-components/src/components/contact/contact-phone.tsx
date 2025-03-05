import { faPhone } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type ContactPhoneProps = {
  /**
   * Additional classes to apply to the phone number
   */
  className?: string;
  /**
   * The phone number to display
   */
  number: string;
  /**
   * The phone number extension to display
   */
  extension?: string;
};

/**
 * The ContactPhone component is used to display a phone number.
 */
export function ContactPhone({ number, extension, className }: ContactPhoneProps) {
  const phone = tv({
    slots: {
      container: 'tw:flex tw:items-center tw:gap-1',
      link: 'tw:underline tw:decoration-current tw:hocus-visible:decoration-transparent tw:transition-colors tw:text-body-copy-link-on-light tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
    },
  });

  const { container, link } = phone();

  return (
    <div className={twMerge(container(), className)}>
      <FontAwesomeIcon icon={faPhone} />
      <a className={link()} href={`tel:${number}`}>
        {number}
      </a>
      {extension && <span> - Ext. {extension}</span>}
    </div>
  );
}

ContactPhone.displayName = 'ContactPhone';
