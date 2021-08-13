<script lang="ts">
  /* eslint-disable no-autofix/no-undef-init */
  import { _ } from 'svelte-i18n';
  import type { Type } from './types';

  type Visual = {
    src: string;
    webpSrc?: string;
    legend?: string;
    width?: number;
    height?: number;
    preview?: string;
    srcset?: string;
    webpSrcset?: string;
  }

  export let title: string;
  export let description: string;
  export let seoTitle: string | undefined = undefined;
  export let seoDescription: string | undefined = undefined;
  export let excludeUrl = false;

  /** Optional Meta-tags */
  export let robots: string | undefined = undefined;
  export let visual: Visual | null | undefined = undefined;
  export let url: string | undefined = undefined;
  export let type: Type = 'webpage';

  const metaTitle = (seoTitle || title).trim();
  const metaDescription = (seoDescription || description).trim();
</script>

<svelte:head>
  {#if metaTitle}
    <title>{excludeUrl ? metaTitle : `${metaTitle} | ${$_('common.siteName')}`}</title>
  {/if}

  {#if title}
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
  {/if}

  <meta property="og:type" content={type} />
  <meta property="og:locale" content="fr_FR">
  <meta property="og:site_name" content={$_('common.siteName')} />

  {#if metaDescription}
    <meta name="description" content={metaDescription} />
  {/if}

  {#if description}
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  {#if url && url.trim()}
    <meta property="og:url" content={url} />
  {/if}

  {#if visual && visual.src}
    <meta property="og:image" content={visual.src} />
    {#if visual.width && visual.height}
      <meta property="og:image:width" content={String(visual.width)} />
      <meta property="og:image:height" content={String(visual.height)} />
    {/if}
  {/if}

  {#if robots && robots.trim()}
    <meta name="robots" content={robots} />
  {:else}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
</svelte:head>
