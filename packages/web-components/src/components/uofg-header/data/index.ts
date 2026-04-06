import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { HTMLAttributes } from 'svelte/elements';
import { guelph } from './guelph';
import { news } from './news';

export type HeaderLinkAndMenuCommon = {
  text: string;
  icon?: IconDefinition;
  highlight?: boolean;
  standalone?: boolean;
  attributes?: HTMLAttributes<HTMLAnchorElement>;
};

export type HeaderLink = {
  href: string;
} & HeaderLinkAndMenuCommon;

export type HeaderMenu = {
  items: HeaderLink[];
} & HeaderLinkAndMenuCommon;

export type HeaderData = {
  id: string;
  homepage?: {
    url: string;
    text: string;
  };
  top?: (HeaderLink | HeaderMenu)[];
  primary: HeaderLink[];
};

export const variants: HeaderData[] = [guelph, news];
