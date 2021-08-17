<script lang="ts">
  /* eslint-disable no-autofix/no-undef-init */
  import Link from 'components/Link/Link.svelte';

  export let className = '';
  export let title = '';

</script>

<button class={className}
  {title}
>
  <Link href="#">
    <slot/>
  </Link>
</button>
