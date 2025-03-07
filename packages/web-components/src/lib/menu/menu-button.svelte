<script>
  import { getContext } from 'svelte';

  /**
   * @typedef {Object} Props
   * @property {string} class
   * @property {string} label - For accessibility, the button may need a label
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { class: className, label, children } = $props();

  const open = getContext('menu');
</script>

<button
  class={className}
  aria-haspopup="true"
  aria-expanded={$open}
  aria-label={label}
  onclick={e => {
    $open = !$open;
    e.target.focus();
  }}
>
  {@render children?.()}
</button>
