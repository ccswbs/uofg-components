<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type Snippet } from 'svelte';

  let {
    href,
    label,
    title,
    children,
    class: className,
  }: {
    href: string;
    label?: string;
    title?: string;
    class?: string;
    children: Snippet;
  } = $props();

  const classes = twMerge(
    'w-fit underline decoration-transparent transition-colors hover:decoration-black-contrast focus:decoration-black-contrast',
    className,
  );
</script>

<a class={classes} {href} title={title ?? undefined} aria-label={label ?? undefined}>
  {@render children()}
</a>
