<script context="module" lang="ts">
  import { getMetadata } from 'src/repositories/metadata';

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, session }) {
    const [metadata] = await Promise.all([
      getMetadata('homepage'),
    ]);

    return {
      props: {
        metadata,
      }
    };
  }
</script>

<script lang="ts">
  import { session } from '$app/stores';
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { heroesStore } from 'providers/PowerProvider/stores';
  import { getHeroes } from 'src/repositories/heroes';
  import Home from 'src/pages/Home.svelte';
  import Meta from 'components/Meta/Meta.svelte';
  import JsonLd from 'components/SEO/JsonLD.svelte';

  let heroesAreLoading = false;
  let heroesHasErrors = false;

  export let metadata;

  onMount(async () => {
    try {
      heroesAreLoading = true;
      heroesHasErrors = false;
      heroesStore.set(await getHeroes());
    } catch (error) {
      console.error('routes/index.svelte', error);
      heroesHasErrors = true;
    } finally {
      heroesAreLoading = false;
    }
  });
</script>

<svelte:head>
  <link rel="canonical" href={$session.siteUrl} />
</svelte:head>

<JsonLd
  url={$session.siteUrl}
  name={$_('pages.home.title')}
  alternateName={$_('pages.home.meta.title')}
  description={$_('pages.home.meta.description')}
/>

{#if metadata && metadata.seo}
  <Meta
    title={metadata.seo.title}
    description={metadata.seo.description}
    robots={metadata.seo.robots || ''}
    visual={metadata.seo.visual}
    type="website"
    url={$session.siteUrl}
    excludeUrl
  />
{/if}

<Home />
