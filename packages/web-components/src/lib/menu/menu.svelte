<script lang="ts">
  import focuswithin from '../focus-within';
  import { setContext, Snippet } from 'svelte';
  import { writable } from 'svelte/store';

  let {
    class: className,
    autoCollapse = true,
    button,
    children,
  }: {
    class: string;
    autoCollapse?: boolean;
    button: Snippet;
    children: Snippet;
  } = $props();

  const open = writable(false);

  setContext('menu', open);

  const handleFocusOutside = () => {
    if (autoCollapse) $open = false;
  };
</script>

<div use:focuswithin class={className} tabindex="-1" onfocusoutside={handleFocusOutside} data-expanded={$open}>
  {@render button?.()}

  {#if $open}
    {@render children?.()}
  {/if}
</div>
