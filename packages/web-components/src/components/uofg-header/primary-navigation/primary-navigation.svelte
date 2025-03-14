<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  import Logo from './logo.svelte';
  import UofGHLogo from '../../../svg/uofgh-logo.svelte';
  import Desktop from './desktop.svelte';
  import Mobile from './mobile.svelte';
  import { getContext } from 'svelte';
  import { type HeaderContext } from '../uofg-header.svelte';

  const headerState = getContext<HeaderContext>('header-state');
</script>

<nav
  class={twJoin(
    'relative flex w-full justify-between bg-black px-[calc((100%-1320px)/2)] text-lg text-black-contrast lg:h-25',
    $headerState?.variant === 'dual-brand' ? 'h-[7.5rem]' : 'h-12.5',
  )}
  aria-label="Primary"
>
  <Logo />

  {#if $headerState?.variant === 'dual-brand'}
    <a
      href="https://www.guelphhumber.ca"
      class="ml-auto h-full w-auto p-4 transition-opacity hover:opacity-75 focus:opacity-75"
    >
      <span class="sr-only">University of Guelph-Humber Homepage</span>
      <UofGHLogo />
    </a>
  {:else if $headerState?.mode === 'desktop'}
    <Desktop />
  {:else}
    <Mobile />
  {/if}
</nav>
