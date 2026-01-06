import type { HTMLAttributes } from 'svelte/elements';

export type FooterLink = {
  text: string;
  icon?: any;
  href: string;
  classes?: string;
  attributes?: Omit<HTMLAttributes<HTMLAnchorElement>, 'class'>;
};
