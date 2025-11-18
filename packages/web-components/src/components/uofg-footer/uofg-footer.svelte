<svelte:options
  customElement={{
    tag: 'uofg-footer',
    extend: customElementConstructor => {
      return class extends customElementConstructor {
        constructor() {
          super();
          attachTailwind(this.shadowRoot);
        }
      };
    },
    props: {
      variant: { reflect: true, attribute: 'variant' },
    },
  }}
/>

<script module lang="ts">
  import { type Writable } from 'svelte/store';

  export type FooterProps = {
    variant?: 'ridgetown';
  };

  export type FooterContext = Writable<FooterProps>;
</script>

<script lang="ts">
  import attachTailwind from '../../lib/attach-tailwind';
  import SubFooter from './sub-footer.svelte';
  import Logo from './logo.svelte';
  import Social from './social.svelte';
  import PrimaryLinks from './primary-links.svelte';
  import Address from './address.svelte';
  import Link from './link.svelte';
  import { social } from './data/guelph';
  import { tv } from 'tailwind-variants';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let { variant }: FooterProps = $props();

  const footerState: FooterContext = writable({
    variant,
  });

  setContext('footer-state', footerState);

  const classes = tv({
    slots: {
      footer:
        'flex flex-col content-center gap-0 bg-black px-[max(calc((100%-1320px)/2),2rem)] py-12 text-black-contrast md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4',
      wrapper: 'mb-6 grid grid-rows-5 items-center gap-0 not-italic md:mb-0',
    },
  });

  let subFooter = $state<{ text: string; href: string }[]>([]);

  onMount(() => {
    const updateSubFooter = () => {
      subFooter = Array.from($host().children)
        .filter(child => child.tagName === 'A')
        .map(child => ({ text: child.textContent ?? '', href: child.getAttribute('href') ?? '' }));
    };

    updateSubFooter();

    const observer = new MutationObserver(updateSubFooter);
    observer.observe($host(), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  });

  const { footer, wrapper } = classes();
</script>

<footer>
  {#if Array.isArray(subFooter) && subFooter.length > 0}
    <SubFooter links={subFooter} />
  {/if}

  <div class={footer()}>
    <div class={wrapper()}>
      <Logo />
      <Social />
      <Link href={social.directory}>Social Media Directory</Link>
      <Link href="https://www.uoguelph.ca/web/">©&nbsp;{new Date().getFullYear()}&nbsp;University of Guelph</Link>
    </div>

    <PrimaryLinks />

    <Address />
  </div>
</footer>
