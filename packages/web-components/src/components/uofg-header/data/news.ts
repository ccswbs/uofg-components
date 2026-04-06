import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import type { HTMLAttributes } from 'svelte/elements';

export type HeaderLinkAndMenuCommon = {
  text: string;
  icon?: any;
  highlight?: boolean;
  excludeFromMainMenu?: boolean;
  attributes?: HTMLAttributes<HTMLAnchorElement>;
};

export type HeaderLink = {
  href: string;
} & HeaderLinkAndMenuCommon;

export type HeaderMenu = {
  items: HeaderLink[];
} & HeaderLinkAndMenuCommon;

export const primaryNavigation: HeaderLink[] = [
  {
    text: 'Find An Expert',
    href: '/about',
  },
  {
    text: 'For Journalists',
    href: '/programs/undergraduate',
  },
  {
    text: 'Events',
    href: '/admissions',
  },
  {
    text: 'Contact Us',
    href: '/studentexperience/',
  },
];

export const search: HeaderLink = {
  text: 'Search the University of Guelph News',
  href: '/news/directory',
  icon: faSearch,
};

export const topNavigation: (HeaderLink | HeaderMenu)[] = [];

export const accountMenu: HeaderMenu = {
  text: 'Account Menu',
  items: [
    {
      text: 'U of G Insider',
      href: 'https://uoguelphca.sharepoint.com/',
    },
    {
      text: 'WebAdvisor',
      href: 'https://www.uoguelph.ca/webadvisor/',
    },
    {
      text: 'GryphMail',
      href: 'https://mail.uoguelph.ca/',
    },
    {
      text: 'CourseLink',
      href: 'https://courselink.uoguelph.ca/',
    },
    {
      text: 'GryphLife',
      href: 'https://gryphlife.uoguelph.ca/',
    },
  ],
  icon: faUser,
};
