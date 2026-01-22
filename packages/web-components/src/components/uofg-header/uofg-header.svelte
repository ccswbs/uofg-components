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

<script module lang="ts">
  import { type Writable } from 'svelte/store';

  export type HeaderProps = {
    pageTitle?: string;
    pageURL?: string;
    variant?: 'dual-brand';
  };

  export type HeaderContext = Writable<
    {
      mode: 'mobile' | 'desktop';
    } & Pick<HeaderProps, 'variant'>
  >;
</script>

<script lang="ts">
  import attachTailwind from '../../lib/attach-tailwind';
  import TopNavigation from './top-navigation/top-navigation.svelte';
  import PrimaryNavigation from './primary-navigation/primary-navigation.svelte';
  import SubNavigation from './sub-navigation/sub-navigation.svelte';
  import { writable } from 'svelte/store';
  import { onMount, setContext } from 'svelte';
  import { type HeaderLink, type HeaderMenu } from './data/guelph';

  let { pageTitle, pageURL, variant }: HeaderProps = $props();

  let windowWidth = $state<number>(0);
  const BREAKPOINT = 1024;

  const headerState: HeaderContext = writable({
    mode: 'mobile',
    variant: undefined,
  });

  $effect.pre(() => {
    headerState.update(state => ({ ...state, variant }));
  });

  setContext('header-state', headerState);

  let subNavigation = $state<(HeaderLink | HeaderMenu)[]>([]);

  onMount(() => {
    const updateSubNavigation = () => {
      const aToSubNavigationLink = (a: HTMLAnchorElement) => {
        const attributes: HeaderLink['attributes'] = {};

        for (const attr of a.attributes) {
          if (attr.name !== 'href') {
            attributes[attr.name as keyof HeaderLink['attributes']] = attr.value;
          }
        }

        return {
          href: a.getAttribute('href'),
          text: a.textContent,
          attributes,
        } as HeaderLink;
      };

      subNavigation = Array.from($host().children)
        .filter(child => child.tagName === 'A' || child.tagName === 'UL')
        .map(child => {
          switch (child.tagName) {
            case 'A':
              return aToSubNavigationLink(child as HTMLAnchorElement);
            case 'UL':
              return {
                text: child.getAttribute('data-title') ?? '',
                items: Array.from(child.querySelectorAll('a')).map(aToSubNavigationLink),
              } as HeaderMenu;
          }
        })
        .filter(val => Boolean(val)) as (HeaderLink | HeaderMenu)[];
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
