import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeaderData } from './index';

export const news: HeaderData = {
  id: 'news',
  homepage: {
    url: 'https://uoguelph.ca/',
    text: 'News',
  },
  primary: [
    {
      text: 'Find An Expert',
      href: 'https://uoguelph.ca/about',
    },
    {
      text: 'For Journalists',
      href: 'https://www.uoguelph.ca/programs/undergraduate',
    },
    {
      text: 'Events',
      href: 'https://uoguelph.ca/admissions',
    },
    {
      text: 'Contact Us',
      href: 'https://www.uoguelph.ca/studentexperience/',
    },
    {
      text: 'News Directory',
      href: '/news/directory',
      standalone: true,
      icon: faSearch,
    },
  ],
};
