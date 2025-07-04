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
      container: 'flex items-center gap-1',
      link: 'text-body-copy-link-on-light underline decoration-current transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none hocus-visible:decoration-transparent',
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
