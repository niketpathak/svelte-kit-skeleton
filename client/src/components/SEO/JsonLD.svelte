<script>
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-nocheck This is because of @html
  import { getContext } from 'svelte';
  import { _ } from 'svelte-i18n';
  import urlJoin from 'url-join';

  export let url = '';
  export let name = '';
  export let alternateName = '';
  export let description = '';

  const session = getContext('session');

  const jsonLD = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    alternateName,
    description,
    creator: {
      '@type': 'Organization',
      name: $_('pages.home.title'),
      url: $session.siteUrl,
      logo: urlJoin($session.siteUrl, 'example-logo.png'),
    },
  });

  const jsonldScript = `<script type="application/ld+json">${jsonLD + '<'}/script>`;
</script>

<svelte:head>
  {@html jsonldScript}
</svelte:head>
