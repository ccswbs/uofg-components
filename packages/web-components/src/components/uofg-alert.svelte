<svelte:options
  customElement={{
    tag: 'uofg-alert',
    props: {
      color: { reflect: true, type: 'String', attribute: 'color' },
    },
    extend: customElementConstructor => {
      return class extends customElementConstructor {
        constructor() {
          super();
          attachTailwind(this.shadowRoot);
        }
      };
    },
  }}
/>

<script lang="ts">
  import attachTailwind from '../lib/attach-tailwind';
  import FontAwesomeIcon from '../lib/font-awesome-icon.svelte';
  import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

  let { color = 'red' } = $props();

  const classes = tv({
    slots: {
      base: 'flex flex-col',
      title: 'flex items-center p-4 text-lg [&>svg]:mr-4 [&>svg]:h-[1.5em] [&>svg]:fill-current',
      content:
        'border-grey-muted flex flex-col border border-t-0 bg-white px-6 py-3 [&>slot[name="subtitle"]::slotted(*)]:mb-4 [&>slot[name="subtitle"]::slotted(*)]:text-xl [&>slot[name="subtitle"]::slotted(*)]:font-bold',
      message:
        '[&>slot[name="message"]::slotted(a)]:text-blue-text [&>slot[name="message"]::slotted(*)]:text-base [&>slot[name="message"]::slotted(a)]:px-1 [&>slot[name="message"]::slotted(a:hover)]:bg-blue [&>slot[name="message"]::slotted(a:hover)]:text-blue-contrast [&>slot[name="message"]::slotted(a:hover)]:decoration-transparent [&>slot[name="message"]::slotted(a:hover)]:transition-colors',
      footer: 'bg-grey-light text-grey-light-contrast flex',
    },
    variants: {
      color: {
        red: {
          title: 'bg-red text-red-contrast',
        },
        yellow: {
          title: 'bg-yellow text-yellow-contrast',
        },
        blue: {
          title: 'bg-blue text-blue-contrast',
        },
        green: {
          title: 'bg-green text-green-contrast',
        },
      },
    },
  });

  const { base, title, content, message, footer } = classes({ color });
</script>

<div class={base()}>
  <div class={title()}>
    <FontAwesomeIcon icon={faCircleExclamation} />
    <slot name="title" />
  </div>

  <div class={content()} class:border-b={!$$slots?.footer}>
    <slot name="subtitle" />

    <span class={message()}>
      <slot name="message" />
    </span>
  </div>

  <div class={footer()} class:px-4={$$slots?.footer} class:py-2={$$slots?.footer}>
    <slot name="footer" />
  </div>
</div>
