<script>
  import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import Menu from '../../../lib/menu.svelte';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { primaryLinks as primary } from '../data/guelph.js';
  import { topLinks as top } from '../data/guelph.js';

  const links = [...primary, ...top];
  const mainMenu = links.filter(link => !link?.excludeFromMainMenu);
  const outer = links.filter(link => link?.excludeFromMainMenu);
</script>

<ul class="flex h-full [&>li]:contents">
  {#each outer as item (item.text || item.title)}
    <li data-testid="outer-link">
      {#if item.links}
        <Menu
          class="h-full w-fit"
          label={item.icon ? item.text : undefined}
          buttonClass="flex h-full aspect-square items-center justify-center gap-2 px-4 transition-colors hover:bg-white focus:bg-white aria-expanded:bg-white hover:text-black focus:text-black aria-expanded:text-black"
          contentClass="absolute right-0 top-full z-50 flex w-full flex-col bg-white px-4 text-black shadow-md lg:w-[30rem] [&>li]:contents"
          as="ul"
        >
          {#snippet button()}
            <FontAwesomeIcon icon={item.icon} />
          {/snippet}

          {#each item.links as link}
            <li class="first:*:mt-4 last:*:mb-4">
              <a
                class="hover:bg-grey-muted border-grey/50 border-0 border-b border-solid p-2 transition-colors"
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
      buttonClass="flex h-full aspect-square items-center justify-center gap-2 px-4 transition-colors hover:bg-white focus:bg-white aria-expanded:bg-white hover:text-black focus:text-black aria-expanded:text-black aria-expanded:[&_svg]:rotate-180"
      contentClass="absolute right-0 top-full z-50 flex w-full flex-col bg-white px-4 text-black shadow-md lg:w-[30rem] [&>li]:contents max-h-[calc(100vh-5rem)] overflow-y-auto"
      as="ul"
    >
      {#snippet button()}
        <FontAwesomeIcon icon={faBars} />
      {/snippet}

      {#each mainMenu as item}
        <li class="first:*:mt-4 last:*:mb-4">
          {#if item.links}
            <Menu
              class="relative w-full"
              buttonClass="flex border-0 border-b border-solid border-grey/50 w-full items-center justify-between gap-2 p-2 transition-colors hover:bg-grey-muted focus:bg-grey-muted aria-expanded:bg-grey-muted aria-expanded:[&_svg]:rotate-180"
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
                    class="hover:bg-grey-muted border-grey/50 border-0 border-b border-solid p-2 transition-colors"
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
              class="hover:bg-grey-muted focus:bg-grey-muted border-grey/50 border-0 border-b border-solid p-2 transition-colors"
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
