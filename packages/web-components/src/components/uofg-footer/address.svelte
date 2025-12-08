<script lang="ts">
  import { address as guelphAddress } from './data/guelph';
  import { address as ridgetownAddress } from './data/ridgetown';
  import Link from './link.svelte';
  import { getContext } from 'svelte';
  import { type FooterContext } from './uofg-footer.svelte';

  const footerState = getContext<FooterContext>('footer-state');
  const address = $footerState.variant === 'ridgetown' ? ridgetownAddress : guelphAddress;
</script>

<address
  class="mt-6 grid grid-rows-5 items-center gap-0 not-italic md:col-[2] md:row-[1] md:mt-0 lg:col-[4] lg:row-[1]"
>
  <strong>{address.title}</strong>
  <span>{address.street},</span>
  <span>{address.city}, Ontario, Canada</span>
  <span>{address.postalCode}</span>
  <Link href={`tel:${address.phoneNumber}`}>{address.phoneNumber}</Link>
</address>
