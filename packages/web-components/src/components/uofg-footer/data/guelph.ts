import {
  faBluesky,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBriefcase,
  faCalendar,
  faCircleCheck,
  faHandHoldingHeart,
  faKey,
  faList,
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
      href: 'https://twitter.com/uofg',
      classes: 'focus:text-black hover:text-black focus:bg-white hover:bg-white',
    },
    {
      text: 'Facebook',
      icon: faFacebookF,
      href: 'https://www.facebook.com/uofguelph',
      classes: 'focus:text-white hover:text-white focus:bg-[#0866ff] hover:bg-[#0866ff]',
    },
    {
      text: 'Instagram',
      icon: faInstagram,
      href: 'https://www.instagram.com/uofguelph/',
      classes: 'focus:text-white hover:text-white focus:bg-[#d62976] hover:bg-[#d62976]',
    },
    {
      text: 'Youtube',
      icon: faYoutube,
      href: 'https://www.youtube.com/user/uofguelph',
      classes: 'focus:text-white hover:text-white focus:bg-[#ff0000] hover:bg-[#ff0000]',
    },
    {
      text: 'LinkedIn',
      icon: faLinkedinIn,
      href: 'https://www.linkedin.com/school/university-of-guelph/',
      classes: 'focus:text-white hover:text-white focus:bg-[#006AFF] hover:bg-[#006AFF]',
    },
    {
      text: 'TikTok',
      icon: faTiktok,
      href: 'https://www.tiktok.com/@uofguelph',
      classes: 'focus:text-black hover:text-black focus:bg-white hover:bg-white',
    },
    {
      text: 'Bluesky',
      icon: faBluesky,
      href: 'https://bsky.app/profile/uofguelph.bsky.social',
      classes: 'focus:text-white hover:text-white focus:bg-[#0a66c2] hover:bg-[#0a66c2]',
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
    text: 'IT Status',
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
    text: 'Academic Calendar',
    icon: faCalendar,
    href: 'https://calendar.uoguelph.ca/',
  },
  {
    text: 'Campus Status',
    icon: faCalendar,
    href: 'https://www.uoguelph.ca/campus-status/',
  },
  {
    text: 'Admission',
    icon: faList,
    href: 'https://uoguelph.ca/admission',
  },
  {
    text: 'Give to U of G',
    icon: faHandHoldingHeart,
    href: 'https://www.alumni.uoguelph.ca/give-to-guelph/how-to-give',
  },
];

export const address = {
  title: 'University of Guelph',
  street: '50 Stone Road East',
  city: 'Guelph',
  postalCode: 'N1G 2W1',
  phoneNumber: '519-824-4120',
};
