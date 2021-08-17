<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit';
  import { browser } from '$app/env';
  import { getClient } from 'lib/axios';
  import { sanitizeUrl } from 'src/helpers';

  export async function load({ page: { params }, session }: LoadInput): Promise<LoadOutput> {
    const { slug } = params;
    const path = sanitizeUrl(slug);

    console.log('path :>> ', path);

    return {
      props: {
        metadata: {},
      }
    };
  };
</script>

<script lang="ts">
  import { session, page } from '$app/stores';
  import { onMount } from 'svelte';
  import Meta from 'components/Meta/Meta.svelte';
  import Button from 'components/Button/Button.svelte';
  import Cyclic from 'components/Cyclic/Cyclic.svelte';
  import Link from 'components/Link/Link.svelte';
  import { referrer } from 'stores/referrer';

  export let metadata;

  onMount(() => {});

  if (metadata && browser) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log('$referrer :>> ', $referrer);
  }
</script>

{#if metadata && metadata.seo}
  <Meta
    seoTitle={metadata.seo.seoTitle}
    seoDescription={metadata.seo.seoDescription}
    title={metadata.seo.title}
    description={metadata.seo.description}
    robots={metadata.seo.robots || ''}
    type='article'
    url={`${$session.siteUrl}/${$page.path}`}
    visual={metadata.seo.visual}
  />
{/if}

<div class="container">
  Here are the ladies -
  <ul>
    <li>Natasha Romanoff</li>
    <li>Gamora</li>
    <li>Captain Marvel</li>
    <li>Jane Foster</li>
    <li>Agent Carter</li>
    <li>Pepper Potts</li>
    <li>Mary Jane Watson</li>
  </ul>

  <Button buttonText="Example Button" />

  <div class="home-link">
    <Link href="#">
      <Cyclic title="Example title">
        <Link href="/">
          Home
        </Link>
      </Cyclic>
    </Link>
  </div>

</div>

<style>
  .home-link {
    margin: 15px;
    padding: 0px 30px;
  }
</style>
