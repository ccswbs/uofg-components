<script>
  import { primaryLinks as links } from './data/guelph.js';
  import Link from './link.svelte';
  import { tv } from 'tailwind-variants';

  const classes = tv({
    slots: {
      list: 'grid grid-rows-5 items-center gap-0 not-italic',
      link: 'flex h-full items-center',
    },
  });

  const { list, link } = classes();
</script>

<ul class={list()}>
  {#each links as { href, title, text }, i}
    {#if i % 2 === 0}
      <li>
        <Link classes={link()} {href} {title}>{text}</Link>
      </li>
    {/if}
  {/each}
</ul>

<ul class={list()}>
  {#each links as { href, title, text }, i}
    {#if i % 2 !== 0}
      <li>
        <Link classes={link()} {href} {title}>{text}</Link>
      </li>
    {/if}
  {/each}
</ul>
