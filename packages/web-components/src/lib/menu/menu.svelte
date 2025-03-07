<script>
  import focuswithin from '../focus-within.js';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /**
   * @typedef {Object} Props
   * @property {string} class
   * @property {boolean} [autoCollapse]
   * @property {import('svelte').Snippet} [button]
   * @property {import('svelte').Snippet} [content]
   */

  /** @type {Props} */
  let { class: className, autoCollapse = true, button, content } = $props();

  const open = writable(false);

  setContext('menu', open);
</script>

<div
  use:focuswithin
  class={className}
  tabindex="-1"
  onfocusoutside={() => {
    if (autoCollapse) $open = false;
  }}
  data-expanded={$open}
>
  {@render button?.()}

  {#if $open}
    {@render content?.()}
  {/if}
</div>
