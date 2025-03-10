<svelte:options
  customElement={{
    tag: 'uofg-back-to-top',
    extend: CustomElementConstructor => {
      return class extends CustomElementConstructor {
        constructor() {
          super();
          attachTailwind(this.shadowRoot);
        }
      };
    },
  }}
/>

<script lang="ts">
  import attachTailwind from '../lib/attach-tailwind';
  import FontAwesomeIcon from '../lib/font-awesome-icon.svelte';
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
  import { tv } from 'tailwind-variants';

  let scrollY = $state(0);
  let visible = $derived(scrollY > 50);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const classes = tv({
    base: 'fixed right-8 bottom-8 z-10 flex h-10 w-10 items-center justify-center border border-white bg-black text-lg text-black-contrast transition hover:bg-red hover:text-red-contrast focus:bg-red focus:text-red-contrast',
    variants: {
      visible: {
        true: 'visible opacity-100',
        false: 'invisible opacity-0',
      },
    },
  });
</script>

<svelte:window bind:scrollY />

<button onclick={scrollToTop} class={classes({ visible })}>
  <span aria-hidden="true">
    <FontAwesomeIcon icon={faChevronUp} />
  </span>
  <span class="sr-only">Back to top of page</span>
</button>
