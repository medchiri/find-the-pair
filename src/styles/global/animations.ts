import { css } from 'styled-components';

export const Animations = css`
  .fade {
    &-enter,
    &-exit-active {
      opacity: 0;
    }
    &-enter-active,
    &-exit {
      opacity: 1;
    }
    &-enter-active,
    &-exit-active {
      transition: opacity 0.5s;
    }
  }
`;
