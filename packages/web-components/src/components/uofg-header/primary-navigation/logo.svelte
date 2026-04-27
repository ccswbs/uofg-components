<script lang="ts">
  import Decorative from '../../../svg/decorative.svg';
  import LogoSmall from '../../../svg/logo-small.svg';
  import Logo from '../../../svg/logo.svg';
  import { getContext } from 'svelte';
  import { tv } from 'tailwind-variants';
  import { type HeaderContext } from '../uofg-header.svelte';
  import { twJoin } from 'tailwind-merge';

  const headerState: HeaderContext = getContext('header-state');

  const classes = tv({
    slots: {
      base: 'flex w-fit',
      decoration: 'left-0 h-full w-[7.5rem] min-[1320px]:absolute [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
      logo: 'flex h-12.5 w-fit items-center justify-center min-[1320px]:absolute min-[1320px]:left-[max(calc((100%-1320px)/2),7.5rem)] lg:h-25',
      link: 'h-full transition-opacity hover:opacity-75 focus:opacity-75 [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
      line: 'mx-2 flex h-full w-0.75 flex-col lg:h-4/5',
      lineSegment: 'h-1/3 w-full',
      secondaryLink:
        'text-2xl underline decoration-transparent transition-colors hover:decoration-white focus:decoration-white lg:pl-4',
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

  const { base, decoration, logo, link, line, lineSegment, secondaryLink } = classes();
</script>

<div class={base()}>
  {#if $headerState?.mode === 'desktop'}
    <div class={decoration()} aria-hidden="true">
      {@html Decorative}
    </div>
  {/if}

  <div class={logo({ mode: $headerState.mode })}>
    <a class={link()} href="https://www.uoguelph.ca" aria-label="University of Guelph Home Page">
      {#if $headerState?.mode === 'desktop'}
        {@html Logo}
      {:else}
        {@html LogoSmall}
      {/if}
    </a>

    {#if $headerState.data.homepage}
      <div class={line()}>
        <div class={twJoin(lineSegment(), 'bg-red')}></div>
        <div class={twJoin(lineSegment(), 'bg-red lg:bg-yellow')}></div>
        <div class={twJoin(lineSegment(), 'bg-red lg:bg-grey-dark')}></div>
      </div>

      <a href={$headerState.data.homepage.url} class={secondaryLink()}>{$headerState.data.homepage.text}</a>
    {/if}
  </div>
</div>
