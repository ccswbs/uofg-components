<script lang="ts">
  import { getContext, type Snippet } from 'svelte';
  import { type Writable } from 'svelte/store';
  let {
    class: className,
    label,
    children,
  }: {
    class?: string;
    label?: string;
    children: Snippet;
  } = $props();

  const open = getContext<Writable<boolean>>('menu');

  const handleClick = (e: MouseEvent) => {
    $open = !$open;
    (e.target as HTMLElement)?.focus();
  };
</script>

<button class={className} aria-haspopup="true" aria-expanded={$open} onclick={handleClick}>
  {@render children?.()}
  {#if label}
    <span class="sr-only">{label}</span>
  {/if}
</button>
