<script>
  import { tv } from 'tailwind-variants';

  let { links } = $props();

  const classes = tv({
    slots: {
      base: 'flex flex-wrap items-center justify-center bg-white p-3 px-[max(calc((100%-1320px)/2),2rem)]',
      item: 'p-3',
      links:
        'text-blue decoration-transparent transition-all hover:text-blue-focus hover:underline hover:decoration-current focus:text-blue-focus focus:underline focus:decoration-current',
    },
  });

  const { base, item, links: linkClasses } = classes();
</script>

<ul class={base()}>
  {#each links as { text, href }}
    <li class={item()}>
      <a class={linkClasses()} {href}>
        {text}
      </a>
    </li>
  {/each}
</ul>
