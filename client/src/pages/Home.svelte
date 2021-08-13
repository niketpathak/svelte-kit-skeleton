<script lang="ts">
  import { getContext, onMount, onDestroy, tick } from 'svelte';
  import { heroesStore } from 'providers/PowerProvider/stores';
  import { NOOP, delay } from 'src/helpers';
  import Link from 'components/Link/Link.svelte';
  import { _ } from 'svelte-i18n';

  const power = getContext('randomPower') || NOOP;
  const refreshInterval = 3000;
  let polling = true;

  $: currentPower = ''

  const refresh = async (): Promise<void> => {
    await tick();

    currentPower = await power();

    await delay(refreshInterval);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (polling ? refresh : NOOP)();
  };

  onMount(refresh);

  onDestroy(() => {
    polling = false;
  });

</script>

<div class="Home container">
  <div>
    <h3>Power</h3>
    The power bestowed currently is - <span class="power">{currentPower}</span>
  </div>

  <div class="heroes-list">
    <h3>List of Heroes</h3>
    <ul>

    </ul>
    {#each $heroesStore as hero}
      <li class="item">{hero}</li>
    {/each}
  </div>

  <div class="link-marvel">
    <Link
      href='/marvel/females'
      class="BrandLogo-link"
      title={$_('pages.home.link.marvel')}
    >
      {$_('pages.home.link.marvel')}
    </Link>
  </div>
</div>

<style>
:global {
  .heroes-list {
    li {
      color: grey;
    }
  }
}
.power {
  color: maroon;
  font-weight: 800;
}
.link-marvel {
  padding: 25px 0;
}
</style>
