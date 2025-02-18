<script>
  import { primaryLinks as links } from './data/guelph.js';
  import Link from './link.svelte';
</script>

<div class="md:col-span-2 md:row-start-2 lg:row-auto flex justify-center">
  <ul class="md:grid md:grid-cols-2 flex w-full flex-col gap-x-6 gap-y-1 [&>li]:contents">
    {#each links as { href, title, text }}
      <li>
        <Link {href} {title}>{text}</Link>
      </li>
    {/each}
  </ul>
</div>
