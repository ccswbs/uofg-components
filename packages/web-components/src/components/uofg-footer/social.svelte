<script>
  import FontAwesomeIcon from '../../lib/font-awesome-icon.svelte';
  import { social } from './data/guelph.ts';
  import { twJoin } from 'tailwind-merge';
</script>

<ul class="flex gap-2 text-lg [&>li]:contents">
  {#each social.links as { href, text, icon, classes }}
    <li>
      <a
        {href}
        aria-label={text}
        class={twJoin(
          `border border-current p-0.5 transition-colors hover:border-transparent focus:border-transparent [&>*]:aspect-square`,
          classes,
        )}
      >
        <FontAwesomeIcon {icon} />
      </a>
    </li>
  {/each}
</ul>
