<script lang="ts">
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { tv } from 'tailwind-variants';
  import { getContext } from 'svelte';
  import { type HeaderContext } from '../uofg-header.svelte';

  const headerState: HeaderContext = getContext('header-state');

  const classes = tv({
    slots: {
      base: 'ml-auto flex text-xl [&>li]:contents',
      link: 'flex h-full items-center justify-center border-0 border-b-8 border-solid border-transparent p-4 transition-colors hover:border-yellow hover:text-yellow',
    },
    variants: {
      type: {
        icon: {
          link: 'pt-8 pb-6 text-yellow hover:text-white [&>svg]:fill-current',
        },
        image: {
          link: 'border-0 transition-opacity hover:opacity-75 focus:opacity-75 [&>svg]:block [&>svg]:h-full [&>svg]:w-auto',
        },
        basic: {
          link: 'pt-6 text-center hover:border-yellow',
        },
      },
    },
  })();
</script>

<ul class={classes.base()}>
  {#each $headerState.data.primary as item}
    <li>
      {#if item.icon}
        <a class={classes.link({ type: 'icon' })} href={item.href}>
          <span class="sr-only">{item.text}</span>
          <FontAwesomeIcon icon={item.icon} />
        </a>
      {:else if item.img}
        <a class={classes.link({ type: 'image' })} href={item.href}>
          {@html item.img}
        </a>
      {:else}
        <a class={classes.link({ type: 'basic' })} href={item.href}>
          {item.text}
        </a>
      {/if}
    </li>
  {/each}
</ul>
