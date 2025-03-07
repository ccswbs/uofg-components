<script lang="ts">
  import { getContext, type Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';
  let {
    class: className,
    label,
    children,
  }: {
    class: string;
    label: string;
    children: Snippet;
  } = $props();

  const open = getContext<Writable<boolean>>('menu');

  const handleClick = (e: MouseEvent) => {
    $open = !$open;
    (e.target as HTMLElement)?.focus();
  };
</script>

<button class={className} aria-haspopup="true" aria-expanded={$open} aria-label={label} onclick={handleClick}>
  {@render children?.()}
</button>
