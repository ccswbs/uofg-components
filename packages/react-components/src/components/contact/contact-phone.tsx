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

/**
 * Strips all non-numeric characters from a phone number
 * @param phoneNumber - The phone number to clean
 * @returns The phone number with only digits
 */
function stripPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, '');
}

/**
 * Formats a phone number to (XXX) XXX-XXXX format
 * @param phoneNumber - The phone number to format
 * @returns The formatted phone number
 */
function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = stripPhoneNumber(phoneNumber);
  
  // Handle different phone number lengths
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    // Remove leading 1 for North American numbers
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  // Return original if it doesn't match expected format
  return phoneNumber;
}

/** The ContactPhone component is used to display a phone number. */
export function ContactPhone({ number, extension, className }: ContactPhoneProps) {
  const phone = tv({
    slots: {
      container: 'flex items-center gap-1',
      link: 'text-body-copy-link-on-light underline decoration-current transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none hocus-visible:decoration-transparent',
    },
  });

  const { container, link } = phone();

  const cleanNumber = stripPhoneNumber(number);
  const formattedNumber = formatPhoneNumber(number);

  return (
    <div className={`uofg-contact-phone-container ${twMerge(container(), className)}`}>
      <FontAwesomeIcon icon={faPhone} className="uofg-contact-phone-icon me-2" />
      <a className={`uofg-contact-phone ${link()}`} href={`tel:${cleanNumber}${extension ? `;${extension}` : ''}`}>
        {formattedNumber}{extension && <span className="uofg-contact-phone-extension">,  Ext. {extension}</span>}
      </a>
    </div>
  );
}

ContactPhone.displayName = 'ContactPhone';
