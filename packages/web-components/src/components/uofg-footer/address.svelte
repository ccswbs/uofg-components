<script>
  import { address } from './data/guelph.js';
  import Link from './link.svelte';
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
