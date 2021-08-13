<script lang="ts">
  import { setContext } from 'svelte';
  import { getPower } from 'src/repositories/heroes';

  const power = async () => await getPower();

  setContext('randomPower', power);
</script>

<slot />
