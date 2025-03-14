<script lang="ts">
  import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import Menu from '../../../lib/menu.svelte';
  import MenuTest from '../../../lib/menu/menu.svelte';
  import MenuButton from '../../../lib/menu/menu-button.svelte';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { primaryNavigation as primary, topNavigation as top } from '../data/guelph';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  const primaryNavigation = [...primary, ...top];
  const mainMenu = primaryNavigation.filter(link => !link?.excludeFromMainMenu);
  const outer = primaryNavigation.filter(link => link?.excludeFromMainMenu);
</script>

<ul class="flex h-full [&>li]:contents">
  {#each outer as item (item.text || item.title)}
    <li>
      {#if item.links}
        <MenuTest class="h-full w-fit">
          {#snippet button()}
            <MenuButton
              class="flex aspect-square h-full items-center justify-center gap-2 px-4 transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black aria-expanded:bg-white aria-expanded:text-black"
              label={item.text}
            >
              <FontAwesomeIcon icon={item.icon} />
            </MenuButton>
          {/snippet}

          {#snippet content()}
            <ul
              class="absolute top-full right-0 z-50 flex w-full flex-col bg-white px-4 text-black shadow-md lg:w-[30rem]"
              transition:slide={{ duration: 200, easing: cubicInOut }}
            >
              {#each item.links as link}
                <li class="contents first:*:mt-4 last:*:mb-4">
                  <a
                    class="border-grey/50 hover:bg-grey-muted border-0 border-b border-solid p-2 transition-colors"
                    href={link.href}
                    {...link.attributes}
                  >
                    {link.text}
                  </a>
                </li>
              {/each}
            </ul>
          {/snippet}
        </MenuTest>
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
    <Menu
      class="h-full w-fit"
      label="Main Menu"
      buttonClass="flex h-full aspect-square items-center justify-center gap-2 px-4 transition-colors hover:bg-white focus:bg-white aria-expanded:bg-white hover:text-black focus:text-black aria-expanded:text-black [&_svg]:aria-expanded:rotate-180"
      contentClass="absolute right-0 top-full z-50 flex w-full flex-col bg-white px-4 text-black shadow-md lg:w-[30rem] [&>li]:contents max-h-[calc(100vh-5rem)] overflow-y-auto"
      as="ul"
    >
      {#snippet button()}
        <FontAwesomeIcon icon={faBars} />
      {/snippet}

      {#each mainMenu as item}
        <li class="[&>*]:first:mt-4 [&>*]:last:mb-4">
          {#if item.links}
            <Menu
              class="relative w-full"
              buttonClass="flex border-0 border-b border-solid border-grey/50 w-full items-center justify-between gap-2 p-2 transition-colors hover:bg-grey-muted focus:bg-grey-muted aria-expanded:bg-grey-muted [&_svg]:aria-expanded:rotate-180"
              contentClass="flex flex-col w-full flex-col bg-white text-black [&>li]:contents"
              as="ul"
              autoCollapse={false}
            >
              {#snippet button()}
                <span
                  class="flex w-full items-center justify-between gap-2 [&>svg]:transition-transform"
                  class:bg-yellow={item.highlight}
                >
                  <span class="mr-auto">{item.text}</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              {/snippet}

              {#each item.links as link}
                <li>
                  <a
                    class="border-grey/50 hover:bg-grey-muted border-0 border-b border-solid p-2 transition-colors"
                    href={link.href}
                    {...link.attributes}
                  >
                    {link.text}
                  </a>
                </li>
              {/each}
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
    </Menu>
  </li>
</ul>
