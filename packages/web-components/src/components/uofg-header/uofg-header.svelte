<svelte:options
  customElement={{
    tag: 'uofg-header',
    extend: customElementConstructor => {
      return class extends customElementConstructor {
        constructor() {
          super();
          attachTailwind(this.shadowRoot);
        }
      };
    },
    props: {
      pageTitle: { reflect: true, attribute: 'page-title' },
      pageURL: { reflect: true, attribute: 'page-url' },
      variant: { reflect: true, attribute: 'variant' },
    },
  }}
/>

<script lang="ts">
  import attachTailwind from '../../lib/attach-tailwind';
  import TopNavigation from './top-navigation.svelte';
  import PrimaryNavigation from './primary-navigation/primary-navigation.svelte';
  import SubNavigation from './sub-navigation/sub-navigation.svelte';
  import { writable } from 'svelte/store';
  import { onMount, setContext } from 'svelte';

  let {
    pageTitle,
    pageURL,
    variant,
  }: {
    pageTitle?: string;
    pageURL?: string;
    variant?: 'dual-brand';
  } = $props();

  let windowWidth = $state<number>(0);
  const BREAKPOINT = 1024;

  const headerState = writable({
    mode: 'mobile',
    variant,
  });

  setContext('header-state', headerState);

  type SubNavigationLink = {
    href: string;
    text: string;
    attributes: Record<string, string>;
  };

  type SubNavigationMenu = {
    title: string;
    links: SubNavigationLink[];
  };

  let subNavigation = $state<(SubNavigationLink | SubNavigationMenu)[]>([]);

  onMount(() => {
    const updateSubNavigation = () => {
      const aToSubNavigationLink = (a: HTMLAnchorElement) => {
        const attributes: SubNavigationLink['attributes'] = {};

        for (const attr of a.attributes) {
          if (attr.name !== 'href') {
            attributes[attr.name] = attr.value;
          }
        }

        return {
          href: a.getAttribute('href'),
          text: a.textContent,
          attributes,
        } as SubNavigationLink;
      };

      subNavigation = Array.from($host().children)
        .filter(child => child.tagName === 'A' || child.tagName === 'UL')
        .map(child => {
          switch (child.tagName) {
            case 'A':
              return aToSubNavigationLink(child as HTMLAnchorElement);
            case 'UL':
              return {
                title: child.getAttribute('data-title') ?? '',
                links: Array.from(child.querySelectorAll('a')).map(aToSubNavigationLink),
              } as SubNavigationMenu;
          }
        })
        .filter(val => Boolean(val)) as (SubNavigationLink | SubNavigationMenu)[];
    };

    updateSubNavigation();

    const observer = new MutationObserver(updateSubNavigation);
    observer.observe($host(), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  });

  $effect(() => {
    headerState.set({
      mode: windowWidth >= BREAKPOINT ? 'desktop' : 'mobile',
      variant,
    });
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class="relative z-10 w-full font-sans text-black">
  {#if $headerState.mode === 'desktop' && variant !== 'dual-brand'}
    <TopNavigation />
  {/if}

  <PrimaryNavigation />

  {#if subNavigation?.length > 0 || pageTitle}
    <SubNavigation title={pageTitle} url={pageURL} items={subNavigation} />
  {/if}
</header>
