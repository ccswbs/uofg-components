<script lang="ts">
  import Menu from '../../../lib/menu/menu.svelte';
  import MenuButton from '../../../lib/menu/menu-button.svelte';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  let { items } = $props();
</script>

<li>
  <Menu class="h-full">
    {#snippet button()}
      <MenuButton
        class="flex aspect-square h-full items-center justify-center gap-2 px-4 transition-colors hover:bg-yellow hover:text-yellow-contrast focus:bg-yellow focus:text-yellow-contrast aria-expanded:bg-yellow aria-expanded:text-yellow-contrast"
        label="Sub Navigation Menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
    {/snippet}

    <ul
      class="absolute top-full right-0 z-50 flex max-h-[calc(100vh-5rem)] w-full flex-col overflow-y-auto bg-white px-4 py-3 whitespace-normal text-black shadow-md lg:w-[30rem] [&>li]:contents"
      transition:slide={{ duration: 200, easing: cubicInOut }}
    >
      {#each items as item (item.text)}
        <li>
          {#if 'items' in item}
            <!-- Nested Menu -->
            <Menu class="relative w-full" autoCollapse={false}>
              {#snippet button()}
                <MenuButton
                  class="group border-grey/50 hover:bg-grey-muted focus:bg-grey-muted aria-expanded:bg-grey-muted flex w-full items-center justify-between gap-2 border-0 border-b border-solid p-2 transition-colors"
                >
                  <span class="flex w-full items-center justify-between gap-2">
                    <span class="mr-auto">{item.text}</span>
                    <FontAwesomeIcon icon={faChevronDown} class="transition-transform group-aria-expanded:rotate-180" />
                  </span>
                </MenuButton>
              {/snippet}

              <ul
                class="flex w-full flex-col bg-white text-black [&>li]:contents"
                transition:slide={{ duration: 200, easing: cubicInOut }}
              >
                {#each item.items as menuItem}
                  <li>
                    <a
                      {...menuItem.attributes}
                      class={`border-grey/50 hover:bg-grey-muted hover:text-grey-muted-contrast border-0 border-b border-solid p-2 transition-colors ${menuItem.attributes?.class ?? ''}`}
                      href={menuItem.href}
                    >
                      {menuItem.text}
                    </a>
                  </li>
                {/each}
              </ul>
            </Menu>
          {:else}
            <!-- Link -->
            <a
              {...item.attributes}
              class={`border-grey/50 hover:bg-grey-muted border-0 border-b border-solid p-2 transition-colors ${item.attributes?.class ?? ''}`}
              href={item.href}
            >
              {item.text}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </Menu>
</li>
