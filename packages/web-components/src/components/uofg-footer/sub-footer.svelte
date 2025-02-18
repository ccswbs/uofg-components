<script>
  let { links } = $props();
</script>

<ul class="flex flex-wrap items-center justify-center bg-white p-3 px-[max(calc((100%-1320px)/2),2rem)]">
  {#each links as { text, href }}
    <li class="p-3">
      <a
        class="text-blue decoration-transparent transition-all hover:text-blue-focus hover:underline hover:decoration-current focus:text-blue-focus focus:underline focus:decoration-current"
        {href}
      >
        {text}
      </a>
    </li>
  {/each}
</ul>
