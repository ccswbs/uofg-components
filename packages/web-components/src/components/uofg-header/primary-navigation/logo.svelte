<script lang="ts">
  import Decorative from '../../../svg/decorative.svg';
  import LogoSmall from '../../../svg/logo-small.svg';
  import Logo from '../../../svg/logo.svg';
  import { getContext } from 'svelte';
  import { tv } from 'tailwind-variants';
  import { type HeaderContext } from '../uofg-header.svelte';

  const headerState: HeaderContext = getContext('header-state');

  const classes = tv({
    slots: {
      base: 'flex w-fit',
      decoration: 'left-0 h-full w-[7.5rem] min-[1320px]:absolute [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
      logo: 'flex h-12.5 w-fit items-center transition-opacity hover:opacity-75 focus:opacity-75 min-[1320px]:absolute min-[1320px]:left-[max(calc((100%-1320px)/2),7.5rem)] lg:h-25 [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
    },
    variants: {
      mode: {
        desktop: {
          logo: 'py-2',
        },
        mobile: {
          logo: 'p-3',
        },
      },
    },
  });

  const { base, decoration, logo } = classes();
</script>

<div class={base()}>
  {#if $headerState?.mode === 'desktop'}
    <div class={decoration()} aria-hidden="true">
      {@html Decorative}
    </div>
  {/if}

  <a
    class={logo({ mode: $headerState.mode })}
    href="https://www.uoguelph.ca"
    aria-label="University of Guelph Home Page"
  >
    {#if $headerState?.mode === 'desktop' || $headerState?.variant === 'dual-brand'}
      {@html Logo}
    {:else}
      {@html LogoSmall}
    {/if}
  </a>
</div>
