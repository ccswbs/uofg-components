import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  faBriefcase,
  faCalendar,
  faCircleCheck,
  faHandHoldingHeart,
  faKey,
  faSitemap,
  faTree,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import type { HTMLAttributes } from 'svelte/elements';

export type FooterLink = {
  text: string;
  icon?: any;
  href: string;
  classes?: string;
  attributes?: Omit<HTMLAttributes<HTMLAnchorElement>, 'class'>;
};

export const social: { directory: string; links: FooterLink[] } = {
  directory: 'https://www.uoguelph.ca/web/socialmedia/',
  links: [
    {
      text: 'X',
      icon: faXTwitter,
      href: 'https://twitter.com/RidgetownCampus',
      classes: 'focus:text-black hover:text-black focus:bg-white hover:bg-white',
    },
    {
      text: 'Instagram',
      icon: faInstagram,
      href: 'https://www.instagram.com/ridgetowncampus/',
      classes: 'focus:text-white hover:text-white focus:bg-[#d62976] hover:bg-[#d62976]',
    },
    {
      text: 'LinkedIn',
      icon: faLinkedinIn,
      href: 'https://www.linkedin.com/school/university-of-guelph-ridgetown-campus/',
      classes: 'focus:text-white hover:text-white focus:bg-[#0a66c2] hover:bg-[#0a66c2]',
    },
    {
      text: 'Facebook',
      icon: faFacebookF,
      href: 'https://www.facebook.com/UofGRidgetownCampus',
      classes: 'focus:text-white hover:text-white focus:bg-[#0866ff] hover:bg-[#0866ff]',
    },
  ],
};

export const primaryLinks: FooterLink[] = [
  {
    text: 'Accessibility',
    icon: faUniversalAccess,
    href: 'https://www.uoguelph.ca/diversity-human-rights/accessibility-u-g',
  },
  {
    text: 'Privacy',
    icon: faKey,
    href: 'https://www.uoguelph.ca/web/privacy/',
  },
  {
    text: 'Site Map',
    icon: faSitemap,
    href: 'https://www.uoguelph.ca/sitemap',
  },
  {
    text: 'Status Page',
    icon: faCircleCheck,
    href: 'https://uoguelph.statuspage.io/',
  },
  {
    text: 'Land Acknowledgement',
    icon: faTree,
    href: 'https://www.uoguelph.ca/land-acknowledgement/',
    attributes: {
      title:
        'The University of Guelph resides on the treaty lands and territory of the Mississaugas of the Credit. We recognize that today this gathering place is home to many First Nations, Inuit and Métis peoples and acknowledging them reminds us of our collective responsibility to the land where we learn and work.',
    },
  },
  {
    text: 'Careers',
    icon: faBriefcase,
    href: 'https://careers.uoguelph.ca/',
  },
  {
    text: 'Programs',
    icon: faCalendar,
    href: 'https://preview-ugconthub.netlify.app/ridgetown/programs/',
  },
  {
    text: 'Campus Map',
    icon: faCalendar,
    href: 'https://preview-ugconthub.netlify.app/ridgetown/about/directions',
  },
  {
    text: 'Give to U of G',
    icon: faHandHoldingHeart,
    href: 'https://www.alumni.uoguelph.ca/give-to-guelph/how-to-give',
  },
];

export const address = {
  title: 'University of Guelph, Ridgetown Campus',
  street: '120 Main Street East',
  city: 'Ridgetown',
  postalCode: 'N0P 2C0',
  phoneNumber: '519-674-1500',
};
