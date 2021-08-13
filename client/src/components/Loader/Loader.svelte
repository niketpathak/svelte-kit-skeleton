<div class="loader">
  <div class="loader-inner">
    <div />
    <div />
  </div>
</div>

<style>

  @keyframes ripple {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - var(--navbar-height));
    grid-column: 1 / -1;

    @media not all and (min-resolution: .001dpcm) {
      @supports (-webkit-appearance: none) and (min-height: -webkit-fill-available) {
        min-height: -webkit-fill-available;
      }
    }

    &-inner {
      width: 100px;
      height: 100px;

      & > div {
        position: absolute;
        opacity: 1;
        border-radius: 50%;
        width: inherit;
        height: inherit;
        background-color: var(--color-black);

        animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;

        &:nth-child(2) {
          animation-delay: -0.75s;
        }
      }
    }
  }
</style>
