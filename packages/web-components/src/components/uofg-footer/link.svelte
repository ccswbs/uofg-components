<script>
  let { href, label, title, children } = $props();
</script>

<a
  class="w-fit underline decoration-transparent transition-colors hover:decoration-black-contrast focus:decoration-black-contrast"
  {href}
  title={title ?? undefined}
  aria-label={label ?? undefined}
>
  {@render children()}
</a>
