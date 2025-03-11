<script lang="ts">
  import Decorative from '../../svg/decorative.svelte';
  import LogoSmall from '../../svg/logo-small.svelte';
  import Logo from '../../svg/logo.svelte';
  import { getContext } from 'svelte';
  import { tv } from 'tailwind-variants';
  import { type HeaderContext } from './uofg-header.svelte';

  const headerState: HeaderContext = getContext('header-state');

  const classes = tv({
    slots: {
      base: 'flex w-fit',
      decoration: 'left-0 h-full w-[7.5rem] min-[1320px]:absolute [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
      logo: 'flex h-full w-fit items-center transition-opacity hover:opacity-75 focus:opacity-75 min-[1320px]:absolute min-[1320px]:left-[max(calc((100%-1320px)/2),7.5rem)] [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
    },
  });

  const { base, decoration, logo } = classes();
</script>

<div class={base()}>
  {#if $headerState?.mode === 'desktop'}
    <!-- Decorative SVG -->
    <div class={decoration()} aria-hidden="true">
      <Decorative />
    </div>
  {/if}

  <a class={logo()} href="https://www.uoguelph.ca" aria-label="University of Guelph Home Page">
    {#if $headerState?.mode === 'desktop'}
      <Logo />
    {:else}
      <LogoSmall />
    {/if}
  </a>
</div>
