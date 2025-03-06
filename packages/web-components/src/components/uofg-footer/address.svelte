<script>
  import { address } from './data/guelph.js';
  import Link from './link.svelte';
</script>

<address class="grid grid-rows-5 not-italic items-center mt-6 md:mt-0 md:col-[2] md:row-[1] lg:row-[1] lg:col-[4] gap-1">
  <strong>{address.title}</strong>
  <span>{address.street},</span>
  <span>{address.city}, Ontario, Canada</span>
  <span>{address.postalCode}</span>
  <Link href={`tel:${address.phoneNumber}`}>{address.phoneNumber}</Link>
</address>
