<script lang="ts">
  import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import { twJoin } from 'tailwind-merge';
  let { icon, class: className }: { icon: IconDefinition; class?: string } = $props();

  const width = icon.icon[0];
  const height = icon.icon[1];
  const iconPathData = icon.icon[4];
</script>

<svg class={twJoin('fa-icon', className)} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
  {#if Array.isArray(iconPathData)}
    {#each iconPathData as pathData}
      <path d={pathData} />
    {/each}
  {:else}
    <path d={iconPathData} />
  {/if}
</svg>
