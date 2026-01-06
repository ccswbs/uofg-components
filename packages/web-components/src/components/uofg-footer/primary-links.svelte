<script lang="ts">
  import { primaryLinks as guelphLinks } from './data/guelph';
  import { primaryLinks as ridgetownLinks } from './data/ridgetown';
  import Link from './link.svelte';
  import { tv } from 'tailwind-variants';
  import { getContext } from 'svelte';
  import { type FooterContext } from './uofg-footer.svelte';

  const footerState = getContext<FooterContext>('footer-state');
  const links = $footerState.variant === 'ridgetown' ? ridgetownLinks : guelphLinks;

  const classes = tv({
    slots: {
      list: 'grid grid-rows-5 items-center gap-0 not-italic',
      link: 'flex h-full items-center whitespace-nowrap',
    },
  });

  const { list, link } = classes();
</script>

<ul class={list()}>
  {#each links as { href, attributes, text }, i}
    {#if i % 2 === 0}
      <li>
        <Link class={link()} {href} {...attributes}>{text}</Link>
      </li>
    {/if}
  {/each}
</ul>

<ul class={list()}>
  {#each links as { href, attributes, text }, i}
    {#if i % 2 !== 0}
      <li>
        <Link class={link()} {href} {...attributes}>{text}</Link>
      </li>
    {/if}
  {/each}
</ul>
