<script lang="ts">
  import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import Menu from '../../../lib/menu/menu.svelte';
  import MenuButton from '../../../lib/menu/menu-button.svelte';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import {
    topNavigation as guelphTopNavigation,
    accountMenu as guelphAccountMenu,
    primaryNavigation as guelphPrimaryNavigation,
    search as guelphSearch,
  } from '../data/guelph';
  import {
    topNavigation as ridgetownTopNavigation,
    accountMenu as ridgetownAccountMenu,
    primaryNavigation as ridgetownPrimaryNavigation,
    search as ridgetownSearch,
  } from '../data/ridgetown';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { getContext } from 'svelte';
  import { type HeaderContext } from '../uofg-header.svelte';

  const headerState: HeaderContext = getContext('header-state');
  const mainMenu =
    $headerState.variant === 'ridgetown' ?
      [...ridgetownPrimaryNavigation, ...ridgetownTopNavigation]
    : [...guelphPrimaryNavigation, guelphTopNavigation];
  const outer =
    $headerState.variant === 'ridgetown' ? [ridgetownAccountMenu, ridgetownSearch] : [guelphAccountMenu, guelphSearch];
</script>

<ul class="flex h-full [&>li]:contents">
  {#each outer as item (item.text)}
    <li>
      {#if 'items' in item}
        <Menu class="h-full w-fit">
          {#snippet button()}
            <MenuButton
              class="flex aspect-square h-full items-center justify-center gap-2 px-4 transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black aria-expanded:bg-white aria-expanded:text-black"
              label={item.text}
            >
              <FontAwesomeIcon icon={item.icon} />
            </MenuButton>
          {/snippet}

          <ul
            class="absolute top-full right-0 z-50 flex w-full flex-col bg-white px-4 text-black shadow-md lg:w-[30rem]"
            transition:slide={{ duration: 200, easing: cubicInOut }}
          >
            {#each item.items as menuItem}
              <li class="contents first:*:mt-4 last:*:mb-4">
                <a
                  class="border-grey/50 hover:bg-grey-muted border-0 border-b border-solid p-2 transition-colors"
                  href={menuItem.href}
                  {...menuItem.attributes}
                >
                  {menuItem.text}
                </a>
              </li>
            {/each}
          </ul>
        </Menu>
      {:else}
        <a
          class="flex aspect-square h-full items-center justify-center gap-2 px-4 transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black aria-expanded:bg-white aria-expanded:text-black"
          href={item.href}
          aria-label={item.text}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      {/if}
    </li>
  {/each}

  <!-- Main Menu -->
  <li>
    <Menu class="h-full w-fit">
      {#snippet button()}
        <MenuButton
          class="flex aspect-square h-full items-center justify-center gap-2 px-4 transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black aria-expanded:bg-white aria-expanded:text-black [&_svg]:aria-expanded:rotate-180"
          label="Main Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      {/snippet}

      <ul
        class="absolute top-full right-0 z-50 flex max-h-[calc(100vh-5rem)] w-full flex-col overflow-y-auto bg-white px-4 py-3 text-black shadow-md lg:w-[30rem] [&>li]:contents"
        transition:slide={{ duration: 200, easing: cubicInOut }}
      >
        {#each mainMenu as item}
          <li>
            {#if 'items' in item}
              <Menu class="relative w-full" autoCollapse={false}>
                {#snippet button()}
                  <MenuButton
                    class="border-grey/50 hover:bg-grey-muted focus:bg-grey-muted aria-expanded:bg-grey-muted flex w-full items-center justify-between gap-2 border-0 border-b border-solid p-2 transition-colors [&_svg]:aria-expanded:rotate-180"
                  >
                    <span
                      class="flex w-full items-center justify-between gap-2 [&>svg]:transition-transform"
                      class:bg-yellow={item.highlight}
                    >
                      <span class="mr-auto">{item.text}</span>
                      <FontAwesomeIcon icon={faChevronDown} />
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
                        class="border-grey/50 hover:bg-grey-muted border-0 border-b border-solid p-2 transition-colors"
                        href={menuItem.href}
                        {...menuItem.attributes}
                      >
                        {menuItem.text}
                      </a>
                    </li>
                  {/each}
                </ul>
              </Menu>
            {:else}
              <a
                class="border-grey/50 hover:bg-grey-muted focus:bg-grey-muted border-0 border-b border-solid p-2 transition-colors"
                class:bg-yellow={item.highlight}
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
</ul>
