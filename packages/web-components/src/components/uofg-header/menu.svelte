<script lang="ts">
  import { twJoin } from 'tailwind-merge';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import FontAwesomeIcon from '../../lib/font-awesome-icon.svelte';
  import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import Menu from '../../lib/menu/menu.svelte';
  import MenuButton from '../..//lib/menu/menu-button.svelte';
  import { HeaderMenu } from './data/guelph';

  let {
    menu,
  }: {
    menu: HeaderMenu;
  } = $props();
</script>

<Menu class="relative h-full">
  {#snippet button()}
    <MenuButton
      class={twJoin(
        `hover:bg-grey-muted aria-expanded:bg-grey-muted hover:text-grey-muted-contrast aria-expanded:text-grey-muted-contrast flex h-full items-center justify-center gap-2 px-2 transition-colors`,
        menu.icon && '[&_svg]:aria-expanded:rotate-180)} aspect-square',
      )}
    >
      <span class="flex items-center gap-2 [&>svg]:transition-transform" class:bg-yellow={menu.highlight}>
        {#if menu.icon}
          <FontAwesomeIcon icon={menu.icon} />
        {:else}
          <span>{menu.text}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        {/if}
      </span>
    </MenuButton>
  {/snippet}

  <ul
    class="bg-grey-muted text-grey-muted-contrast absolute top-full right-0 z-50 flex min-w-[20rem] flex-col [&>li]:contents"
  >
    {#each menu.links as link}
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
  </ul>
</Menu>
