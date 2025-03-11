<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type Snippet } from 'svelte';
  import { type HTMLAttributes } from 'svelte/elements';

  let {
    href,
    label,
    children,
    class: className,
    ...rest
  }: {
    href: string;
    label?: string;
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLAnchorElement> = $props();

  const classes = twMerge(
    'w-fit underline decoration-transparent transition-colors hover:decoration-black-contrast focus:decoration-black-contrast',
    className,
  );
</script>

<a {...rest} class={classes} {href} aria-label={label ?? undefined}>
  {@render children()}
</a>
