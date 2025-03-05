<script>
  import { primaryLinks as links } from './data/guelph.js';
  import Link from './link.svelte';
</script>

<div class="flex justify-center md:col-span-2 md:row-start-2 lg:row-auto">
  <ul class="flex w-full flex-col gap-x-6 gap-y-1 md:grid md:grid-cols-2 [&>li]:contents">
    {#each links as { href, title, text }}
      <li>
        <Link {href} {title}>{text}</Link>
      </li>
    {/each}
  </ul>
</div>
