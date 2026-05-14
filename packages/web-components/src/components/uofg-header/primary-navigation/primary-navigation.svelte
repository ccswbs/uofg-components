<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  import Logo from './logo.svelte';
  import Desktop from './desktop.svelte';
  import Mobile from './mobile.svelte';
  import { getContext } from 'svelte';
  import { type HeaderContext } from '../uofg-header.svelte';

  const headerState = getContext<HeaderContext>('header-state');

  const classes = twJoin(
    'relative',
    'flex',
    'w-full',
    'justify-between',
    'bg-black',
    'px-[calc((100%-1320px)/2)]',
    'text-lg',
    'text-black-contrast',
    'lg:h-25',
  );
</script>

<nav class={classes} aria-label="Primary">
  <Logo />

  {#if $headerState?.mode === 'desktop'}
    <Desktop />
  {:else}
    <Mobile />
  {/if}
</nav>
