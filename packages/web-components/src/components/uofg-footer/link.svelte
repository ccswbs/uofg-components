<script>
  import { twMerge } from 'tailwind-merge';

  let { href, label, title, children, classes } = $props();
</script>

<a
  class={twMerge("w-fit underline decoration-transparent transition-colors hover:decoration-black-contrast focus:decoration-black-contrast", classes)}
  {href}
  title={title ?? undefined}
  aria-label={label ?? undefined}
>
  {@render children()}
</a>
