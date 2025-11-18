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
