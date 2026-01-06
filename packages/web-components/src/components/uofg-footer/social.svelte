<script lang="ts">
  import FontAwesomeIcon from '../../lib/font-awesome-icon.svelte';
  import { social as guelphSocial } from './data/guelph';
  import { social as ridgetownSocial } from './data/ridgetown';
  import { twJoin } from 'tailwind-merge';
  import { tv } from 'tailwind-variants';
  import { getContext } from 'svelte';
  import { type FooterContext } from './uofg-footer.svelte';

  const footerState = getContext<FooterContext>('footer-state');
  const social = $footerState.variant === 'ridgetown' ? ridgetownSocial : guelphSocial;

  const classes = tv({
    slots: {
      base: 'flex gap-2 text-lg [&>li]:contents',
      links: 'p-0.5 transition-colors [&>*]:aspect-square',
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
