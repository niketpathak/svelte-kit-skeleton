<script lang="ts">
  /* eslint-disable no-autofix/no-undef-init */
  import type { ButtonColor, ButtonSize, ButtonTheme } from './types';

  import { NOOP } from 'src/helpers';
  import { stop_propagation } from 'svelte/internal';
  import identity from 'src/helpers/identity';

  export let buttonAction: ((event: MouseEvent) => void) | undefined = NOOP;
  export let size: ButtonSize = 'm';
  export let type = 'button';
  export let theme: ButtonTheme = 'primary';
  export let disabled = false;
  export let color: ButtonColor = 'black';
  export let buttonText = '';
  export let className = '';
  export let title = '';
  export let round = false;
  export let stopPropagation = false;
  export let dataTestId = 'button';
</script>

<button
  {title}
  data-testid={dataTestId}
  on:click={(stopPropagation ? stop_propagation : identity)(buttonAction)}
  class="Button btn-{theme}
  btn-{size}
  btn-{color}
  {className}"
  class:round
  aria-label={buttonText || title}
  {disabled}
  {type}
>
  <span class="Button-container">
    <slot name="icon" />
    {#if buttonText}
      <span>{buttonText}</span>
    {:else}
      <slot />
    {/if}
  </span>
</button>

<style>
  /*
    TODO Hover and disabled aren't yet defined
  */
  @import '../../assets/styles/__mixins.css';

  .Button {
    letter-spacing: 0;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    justify-content: center;
    font-weight: 400;
    text-transform: uppercase;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    align-self: center;
    font-family: var(--font-medium);
    display: flex;
    align-items: center;
    overflow: hidden;

    &:focus {
      outline: none;
    }

    &.btn-s {
      @mixin buttonSizeS;
    }

    &.btn-m {
      @mixin buttonSizeM;
    }

    &.btn-l {
      @mixin buttonSizeL;

      :global([slot='icon'] + *) {
        margin-left: var(--space2);
      }
    }

    &-container {
      display: flex;
      align-items: center;
    }

    :global([slot='icon'] + *) {
      margin-left: var(--space);
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        cursor: pointer;
        transform: translateY(-2px);
      }
    }

    height: var(--size);
    border-radius: calc(var(--size) / 2);

    &:disabled {
      cursor: default;
      box-shadow: none;
      margin-top: 0;
    }

    &.round {
      max-width: var(--size);
    }

    &.btn-primary {
      border-color: transparent;

      @media (hover: hover) {
        &:hover:not(:disabled) {
          box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.22);
        }
      }

      &.btn-black {
        color: var(--color-white);
        background-color: var(--color-grey-900);
      }

      &.btn-white {
        color: var(--color-grey-900);
        background-color: var(--color-white);
      }

      &.btn-grey {
        color: var(--color-grey-900);
        background-color: var(--color-grey-200);
      }
    }

    &.btn-secondary {
      background-color: transparent;
      border-color: currentColor;

      @media (hover: hover) {
        &:hover:not(:disabled) {
          box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    &.btn-transparent {
      background-color: transparent;
      border: 0;
      padding: 0;
      width: initial;
      height: initial;
    }

    &.btn-black {
      color: var(--color-grey-900);
    }

    &.btn-grey {
      color: var(--color-grey-400);
    }

    &.btn-grey,
    &.btn-black {
      &:disabled {
        color: var(--color-grey-100);
        background-color: var(--color-grey-300);
      }
    }

    &.btn-white {
      color: var(--color-white);

      &:disabled {
        color: var(--color-grey-500);
        background-color: var(--color-grey-400);
      }
    }

    &.btn-station {
      color: var(--color-white);
      background-color: var(--brand-color);
      border-color: transparent;

      &.franceinfo,
      &.mouv {
        color: var(--color-grey-900);
      }

      &:disabled {
        color: var(--color-grey-100);
        background-color: var(--color-grey-300);
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.22);
        }
      }
    }

    :global([slot='icon']) {
      width: var(--iconSize);
      height: var(--iconSize);

      &:empty {
        background-color: currentColor;
      }
    }

    :global([slot="icon"] svg) {
      width: var(--iconSize);
      height: var(--iconSize);
    }
  }
</style>
