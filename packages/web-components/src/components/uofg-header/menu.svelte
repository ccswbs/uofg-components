<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import FontAwesomeIcon from '../../lib/font-awesome-icon.svelte';
  import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

  let {
    item,
  }: {
    item: {
      text: string;
      icon?: IconDefinition;
      highlight?: boolean;
      links: {
        href: string;
        text: string;
        attributes: Record<string, string>;
      }[];
    };
  } = $props();
</script>

<Menu
  class="relative h-full"
  buttonClass={twJoin(
    `flex h-full items-center justify-center gap-2 px-2 transition-colors hover:bg-grey-muted aria-expanded:bg-grey-muted hover:text-grey-muted-contrast aria-expanded:text-grey-muted-contrast`,
    item.icon && '[&_svg]:aria-expanded:rotate-180)} aspect-square',
  )}
  contentClass="absolute right-0 top-full z-50 flex min-w-[20rem] flex-col bg-grey-muted text-grey-muted-contrast [&>li]:contents"
  as="ul"
  label={item.icon ? item.text : undefined}
>
  {#snippet button()}
    <span class="flex items-center gap-2 [&>svg]:transition-transform" class:bg-yellow={item.highlight}>
      {#if item.icon}
        <FontAwesomeIcon icon={item.icon} />
      {:else}
        <span>{item.text}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      {/if}
    </span>
  {/snippet}

  {#each item.links as link}
    <li>
      <a
        class={twJoin(
          'border-grey/50 border-0 border-b border-solid p-2 transition-colors hover:bg-yellow hover:text-yellow-contrast',
          item.highlight && 'bg-yellow text-yellow-contrast',
        )}
        href={link.href}
        {...link.attributes}
      >
        {link.text}
      </a>
    </li>
  {/each}
</Menu>
