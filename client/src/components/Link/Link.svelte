<script lang="ts">
  import { isInternalLink, pathNormalize } from 'helpers/link';

  export let href: string | null = '';
  export let title = '';

  let className = '';
  export { className as class };

  $: href = pathNormalize(href || '');
</script>

{#if href}
  <a
    {href}
    on:click
    {...(!isInternalLink(href) && { target: '_blank', rel: 'noopener noreferrer nofollow' })}
    {...(title && { title })}
    class={className}
  >
    <slot/>
  </a>
{:else}
  <slot />
{/if}

<style global>
  a {
    line-height: 0;
  }
</style>
