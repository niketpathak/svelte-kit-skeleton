<script lang="ts">
  export let className = '';
</script>

<div class="grid-container {className}">
  <slot />
</div>

<style>

  .grid-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, minmax(60px, 1fr));
    grid-auto-rows: max-content;
    column-gap: var(--space2);
    row-gap: var(--space2);
    margin: 0 var(--space2);
    height: 100%;

    @media (--medium-min-viewport) {
      grid-auto-rows: minmax(min-content, max-content);
    }

    @media (--breakpoint-m) {
      grid-template-columns: repeat(12, minmax(46px, 1fr));
    }

    @media (--breakpoint-l) {
      grid-template-columns: repeat(12, minmax(64px, 1fr));
      margin: 0 var(--space5);
    }

    @media (--xl-min-viewport) {
      grid-template-columns: repeat(12, minmax(80px, 1fr));
      max-width: 1136px;
      margin: 0 auto;
    }
  }
</style>
