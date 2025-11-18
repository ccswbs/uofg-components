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
    text: 'About',
    href: 'https://www.uoguelph.ca/ridgetown/about',
  },
  {
    text: 'Academics',
    href: 'https://www.uoguelph.ca/ridgetown/programs',
  },
  {
    text: 'Admission',
    href: 'https://www.uoguelph.ca/ridgetown/apply',
  },
  {
    text: 'Student Life',
    href: 'https://www.uoguelph.ca/ridgetown/student-life/',
  },
];

export const search: HeaderLink = {
  text: 'Search the University of Guelph',
  href: 'https://uoguelph.ca/search',
  icon: faSearch,
};

export const topNavigation: (HeaderLink | HeaderMenu)[] = [
  {
    text: 'Give',
    href: 'https://www.uoguelph.ca/ridgetown/alumni',
  },
  {
    text: 'News',
    href: 'https://news.uoguelph.ca/',
  },
  {
    text: 'Quick Links',
    items: [
      {
        text: 'Future Students',
        href: 'https://www.uoguelph.ca/ridgetown/discover',
      },
      {
        text: 'Current Students',
        href: 'https://www.ridgetownc.com/current/academic-support/',
      },
      {
        text: 'Alumni',
        href: 'https://www.uoguelph.ca/ridgetown/alumni',
      },
      {
        text: 'Employers & Partners',
        href: 'https://www.ridgetownc.com/about/community/',
      },
    ],
  },
  {
    text: 'Apply Now',
    href: 'https://uoguelph.ca/ridgetown/apply/',
    highlight: true,
  },
];

export const accountMenu: HeaderMenu = {
  text: 'Account Menu',
  items: [
    {
      text: 'Intranet',
      href: 'https://uoguelphca.sharepoint.com/sites/Ridgetown/SitePages/CollabHome.aspx',
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
  ],
  icon: faUser,
};
