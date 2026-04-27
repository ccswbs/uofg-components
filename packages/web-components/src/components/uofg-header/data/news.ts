import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeaderData } from './index';

export const news: HeaderData = {
  id: 'news',
  homepage: {
    url: 'https://uoguelph.ca/news',
    text: 'News',
  },
  primary: [
    {
      text: 'Find An Expert',
      href: 'https://experts.uoguelph.ca/',
    },
    {
      text: 'For Journalists',
      href: 'https://news.uoguelph.ca/media-services/',
    },
    {
      text: 'Events',
      href: 'https://news.uoguelph.ca/events/',
    },
    {
      text: 'Contact Us',
      href: 'https://news.uoguelph.ca/media-services/',
    },
    {
      text: 'News Directory',
      href: 'https://www.uoguelph.ca/news/directory',
      standalone: true,
      icon: faSearch,
    },
  ],
};
