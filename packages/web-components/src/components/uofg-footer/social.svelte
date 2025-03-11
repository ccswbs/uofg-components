<script>
  import FontAwesomeIcon from '../../lib/font-awesome-icon.svelte';
  import { social } from './data/guelph';
  import { twJoin } from 'tailwind-merge';
  import { tv } from 'tailwind-variants';

  const classes = tv({
    slots: {
      base: 'flex gap-2 text-lg [&>li]:contents',
      links:
        'border border-current p-0.5 transition-colors hover:border-transparent focus:border-transparent [&>*]:aspect-square',
    },
  });

  const { base, links } = classes();
</script>

<ul class={base()}>
  {#each social.links as { href, text, icon, classes }}
    <li>
      <a {href} aria-label={text} class={twJoin(links(), classes)}>
        <FontAwesomeIcon {icon} />
      </a>
    </li>
  {/each}
</ul>
