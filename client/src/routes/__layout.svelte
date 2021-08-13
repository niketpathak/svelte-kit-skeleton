<script context="module" lang="ts">
  import '../i18n';
</script>

<script lang="ts">
  import { onMount, setContext, tick } from 'svelte';
  import { _ } from 'svelte-i18n';
  import Cookies from 'js-cookie';
  import { browser } from '$app/env';
  import { session, page, navigating } from '$app/stores';

  import { referrer } from 'stores/referrer';
  import Loader from 'components/Loader/Loader.svelte';
  import PowerProvider from 'providers/PowerProvider/PowerProvider.svelte';

  let noJs = true;
  let noScroll = false;

  const loadCheck = () => {
    console.log('*** __layout :: onLoad ***');
  };

  onMount(() => {
    $referrer = encodeURIComponent(window.location.href);

    noJs = false;
  });

  $: segment = $page.path.substring(1).split('/')[0];

  page.subscribe(async ({ path }) => {
    await tick();

    if (segment) {
      console.info('*** segment :>> *** ', path);
    }

    if (!browser) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $referrer = encodeURIComponent(window.location.href);
  });

  setContext('session', session);
  setContext('preloading', navigating);
  setContext('page', page);
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/localstorage-slim"></script>
</svelte:head>

<svelte:window on:load={loadCheck} />

<PowerProvider>
  <header class:noJs>Svelte Kit Skeleton example</header>
  <main class:noScroll>
    {#if $navigating}
      <Loader />
    {:else}
      <slot />
    {/if}
  </main>
  <footer>{JSON.stringify($page)}</footer>
</PowerProvider>

<style global>
  @import '../assets/styles/global.css';

  header, footer {
    margin: 25px;
    text-align: center;
    background: coral;
  }

  main.isNotConnected .grid-container {
    @media (--xl-min-viewport) {
      max-width: 100vw;
      margin: 0 var(--space3);
    }

    @media (--xxl-min-viewport) {
      margin: 0 var(--space2);
    }
  }


  footer.noScroll .Footer {
    display: none;
  }

  @media (--medium-max-viewport) {
    main.noScroll {
      position: fixed;
      max-width: 100vw;
      overflow: hidden;
      width: 100vw;
      top: 0;
    }
  }

  @media (--large-min-viewport) {
    header.noScroll, main.noScroll {
      overflow: hidden;
      width: calc(100vw - 12px);
      max-width: calc(100vw - 12px);
      right: 12px;
    }

    header.noScroll {
      .HeaderStickyWrapper {
        width: calc(100vw - 12px);
        max-width: calc(100vw - 12px);
      }
    }

    main.noScroll {
      position: fixed;
      top: 0;
    }
  }
</style>
