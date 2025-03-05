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
      container: 'tw:flex tw:items-center tw:gap-1',
      link: 'tw:underline tw:decoration-current tw:hocus-visible:decoration-transparent tw:transition-colors tw:text-body-copy-link-on-light tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
    },
  });

  const { container, link } = contactEmail();

  return (
    <div className={twMerge(container(), className)}>
      <FontAwesomeIcon icon={faEnvelope} />
      <a className={link()} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

ContactEmail.displayName = 'ContactEmail';
