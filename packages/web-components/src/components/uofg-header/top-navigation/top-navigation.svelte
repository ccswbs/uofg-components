<script lang="ts">
  import Menu from '../../../lib/menu/menu.svelte';
  import MenuButton from '../../../lib/menu/menu-button.svelte';
  import { topNavigation, accountMenu } from '../data/guelph';
  import { tv } from 'tailwind-variants';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import FontAwesomeIcon from '../../../lib/font-awesome-icon.svelte';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  const classes = tv({
    slots: {
      base: 'flex h-10 justify-end bg-white px-[calc((100%-1320px)/2)] text-lg',
      wrapper: 'flex h-full items-center justify-end [&>li]:contents',
      link: 'hover:bg-grey-muted hover:text-grey-muted-contrast flex h-full items-center justify-center gap-2 px-2 transition-colors',
      menu: 'relative h-full',
      menuButton:
        'hover:bg-grey-muted aria-expanded:bg-grey-muted hover:text-grey-muted-contrast aria-expanded:text-grey-muted-contrast flex h-full items-center justify-center gap-2 px-2 transition-colors',
      menuContent:
        'bg-grey-muted text-grey-muted-contrast absolute top-full right-0 z-50 flex min-w-[20rem] flex-col [&>li]:contents',
      menuItem:
        'border-grey/50 border-0 border-b border-solid p-2 transition-colors hover:bg-yellow hover:text-yellow-contrast',
    },
    variants: {
      highlight: {
        true: {
          link: 'bg-yellow text-yellow-contrast',
        },
      },
      hasIcon: {
        true: {
          menuButton: 'aspect-square',
        },
      },
    },
  })();
</script>

<nav class={classes.base()} aria-label="Secondary">
  <ul class={classes.wrapper()}>
    {#each [...topNavigation, accountMenu] as item (item.text)}
      <li>
        {#if 'items' in item}
          <Menu class={classes.menu()}>
            {#snippet button()}
              <MenuButton class={classes.menuButton({ hasIcon: Boolean(item.icon) })} label={item.text}>
                {#if item.icon}
                  <FontAwesomeIcon icon={item.icon} />
                {:else}
                  <span>{item.text}</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                {/if}
              </MenuButton>
            {/snippet}

            <ul class={classes.menuContent()} transition:slide={{ duration: 200, easing: cubicInOut }}>
              {#each item.items as menuItem (menuItem.text)}
                <li>
                  {#if 'href' in menuItem}
                    <a {...menuItem.attributes} href={menuItem.href} class={classes.menuItem()}>
                      {menuItem.text}
                    </a>
                  {/if}
                </li>
              {/each}
            </ul>
          </Menu>
        {:else}
          <a {...item.attributes} class={classes.link({ highlight: item.highlight })} href={item.href}>
            {item.text}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
