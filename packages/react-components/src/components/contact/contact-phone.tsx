import { faPhone } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type ContactPhoneProps = {
  /** Additional classes to apply to the phone number */
  className?: string;
  /** The phone number to display */
  number: string;
  /** The phone number extension to display */
  extension?: string;
};

/** The ContactPhone component is used to display a phone number. */
export function ContactPhone({ number, extension, className }: ContactPhoneProps) {
  const phone = tv({
    slots: {
      container: 'flex items-center gap-1',
      link: 'text-body-copy-link-on-light underline decoration-current transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none hocus-visible:decoration-transparent',
    },
  });

  const { container, link } = phone();

  return (
    <div className={`uofg-contact-phone-container ${twMerge(container(), className)}`}>
      <FontAwesomeIcon icon={faPhone} className="uofg-contact-phone-icon" />
      <a className={`uofg-contact-phone ${link()}`} href={`tel:${number}`}>
        {number}
      </a>
      {extension && <span className="uofg-contact-phone-extension"> - Ext. {extension}</span>}
    </div>
  );
}

ContactPhone.displayName = 'ContactPhone';
