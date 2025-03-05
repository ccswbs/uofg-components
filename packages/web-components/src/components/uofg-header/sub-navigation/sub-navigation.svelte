<script>
  import { getContext, onMount } from 'svelte';
  import Desktop from './desktop.svelte';
  import Mobile from './mobile.svelte';
  import { twJoin } from 'tailwind-merge';

  const headerState = getContext('header-state');

  let { items, title, url } = $props();

  let containerWidth = $state();
  let titleWidth = $state();
  let contentWidth = $state();
  let timeout;
  let overflowWidth = $state();

  $effect(() => {
    clearTimeout(timeout);
    if ($headerState?.mode === 'desktop' && containerWidth - titleWidth < contentWidth) {
      timeout = setTimeout(() => {
        overflowWidth = isNaN(overflowWidth) ? containerWidth : Math.max(containerWidth, overflowWidth);
      }, 50);
    }
  });

  onMount(() => {
    if ($headerState?.mode === 'desktop' && containerWidth - titleWidth < contentWidth) {
      overflowWidth = isNaN(overflowWidth) ? containerWidth : Math.max(containerWidth, overflowWidth);
    }
  });
</script>

<nav
  class={twJoin(
    'align-items bg-grey-muted text-grey-muted-contrast relative block justify-end px-[calc((100%-1320px)/2)] text-lg lg:whitespace-nowrap',
    $headerState?.variant === 'dual-brand' ? 'h-10' : 'h-[5rem] lg:h-10',
  )}
  aria-label="Page Specific"
>
  <div
    class="relative flex h-full min-w-full items-center justify-end overflow-y-visible [&>li]:contents"
    bind:clientWidth={containerWidth}
  >
    {#if title && url}
      <a
        class="mr-auto flex h-full items-center justify-center px-3 font-bold transition-colors hover:bg-yellow hover:text-yellow-contrast"
        href={url}
        bind:clientWidth={titleWidth}
      >
        {title}
      </a>
    {:else if title}
      <span bind:clientWidth={titleWidth} class="mr-auto flex h-full items-center justify-center px-3 font-bold">
        {title}
      </span>
    {/if}

    <ul class="static! flex h-full w-fit lg:static [&>li]:contents" bind:clientWidth={contentWidth}>
      {#if items?.length > 0}
        {#if $headerState.mode === 'desktop' && (isNaN(overflowWidth) || containerWidth > overflowWidth)}
          <Desktop {items} />
        {:else}
          <Mobile {items} />
        {/if}
      {/if}
    </ul>
  </div>
</nav>
