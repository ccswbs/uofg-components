<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  import { type Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    href,
    label,
    children,
    class: className,
  }: {
    href: string;
    label?: string;
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLAnchorElement> = $props();

  const classes = twJoin(
    'w-fit',
    'underline',
    'decoration-transparent',
    'transition-colors',
    'hover:decoration-black-contrast',
    'focus:decoration-black-contrast',
  );
</script>

<a class={twJoin(classes, className)} {href} aria-label={label ?? undefined}>
  {@render children()}
</a>
