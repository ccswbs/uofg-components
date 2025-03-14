<script lang="ts">
  import Menu from '../../../lib/menu/menu.svelte';
  import MenuButton from '../../../lib/menu/menu-button.svelte';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  let { items } = $props();
</script>

{#each items as item (item.text)}
  {#if 'items' in item}
    <li>
      <Menu class="relative h-full">
        {#snippet button()}
          <MenuButton
            class="flex h-full items-center justify-center gap-2 px-2 transition-colors hover:bg-yellow hover:text-yellow-contrast focus:bg-yellow focus:text-yellow-contrast aria-expanded:bg-yellow aria-expanded:text-yellow-contrast [&_svg]:aria-expanded:rotate-180"
          >
            <span class="flex items-center gap-2 [&>svg]:transition-transform">
              <span>{item.text}</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </MenuButton>
        {/snippet}

        <ul
          class="bg-grey-muted absolute top-full right-0 z-50 flex min-w-[20rem] flex-col [&>li]:contents"
          transition:slide={{ duration: 200, easing: cubicInOut }}
        >
          {#each item.items as menuItem}
            <li>
              <a
                {...menuItem.attributes}
                class={`border-grey/50 border-0 border-b border-solid p-2 transition-colors hover:bg-yellow hover:text-yellow-contrast focus:bg-yellow focus:text-yellow-contrast ${menuItem.attributes?.class ?? ''}`}
                href={menuItem.href}
              >
                {menuItem.text}
              </a>
            </li>
          {/each}
        </ul>
      </Menu>
    </li>
  {:else}
    <li>
      <a
        {...item.attributes}
        class={`flex h-full items-center justify-center gap-2 px-2 transition-colors hover:bg-yellow hover:text-yellow-contrast focus:bg-yellow focus:text-yellow-contrast ${item.attributes?.class ?? ''}`}
        href={item.href}
      >
        {item.text}
      </a>
    </li>
  {/if}
{/each}
