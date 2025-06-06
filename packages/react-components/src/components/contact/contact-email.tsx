import { faEnvelope } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type ContactEmailProps = {
  /** Additional classes to apply to the email */
  className?: string;
  /** The email address to display */
  email: string;
};

/** The ContactEmail component is used to display an email address. */
export function ContactEmail({ email, className }: ContactEmailProps) {
  const contactEmail = tv({
    slots: {
      container: 'uog:flex uog:items-center uog:gap-1',
      link: 'uog:underline uog:decoration-current uog:hocus-visible:decoration-transparent uog:transition-colors uog:text-body-copy-link-on-light uog:focus-visible:ring-2 uog:focus-visible:ring-offset-2 uog:focus-visible:outline-none',
    },
  });

  const { container, link } = contactEmail();

  return (
    <div className={`uofg-contact-email-container ${twMerge(container(), className)}`}>
      <FontAwesomeIcon icon={faEnvelope} className="uofg-contact-email-icon" />
      <a className={`uofg-contact-email ${link()}`} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

ContactEmail.displayName = 'ContactEmail';
