<script lang="ts">
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { primaryNavigation, search } from '../data/guelph';
  import { tv } from 'tailwind-variants';

  const classes = tv({
    slots: {
      base: 'ml-auto flex text-xl [&>li]:contents',
      link: 'flex h-full items-center justify-center border-0 border-b-8 border-solid border-transparent p-4 transition-colors hover:border-yellow hover:text-yellow',
    },
    variants: {
      hasIcon: {
        true: {
          link: 'pt-8 pb-6 text-yellow hover:text-white [&>svg]:fill-current',
        },
        false: {
          link: 'pt-6 text-center hover:border-yellow',
        },
      },
    },
  })();
</script>

<ul class={classes.base()}>
  {#each [...primaryNavigation, search] as item}
    <li>
      {#if item.icon}
        <a class={classes.link({ hasIcon: true })} href={item.href}>
          <span class="sr-only">{item.text}</span>
          <FontAwesomeIcon icon={item.icon} />
        </a>
      {:else}
        <a class={classes.link({ hasIcon: false })} href={item.href}>
          {item.text}
        </a>
      {/if}
    </li>
  {/each}
</ul>
