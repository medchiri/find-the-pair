import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{
  isOpened: boolean;
  isSuccess: boolean;
}>(
  ({ theme, isOpened, isSuccess }) => css`
    cursor: pointer;
    height: 5rem;
    width: 5rem;
    perspective: 20rem;
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out 1s;
    opacity: ${isSuccess ? 0 : 1};

    @media ${theme.breakpoints.min.md} {
      height: 8rem;
      width: 8rem;
    }

    .card-question {
      display: block;
      font-size: 2.5rem;
      line-height: 1;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      opacity: ${isOpened || isSuccess ? 0 : 1};
      transition: font-size 0.1s linear, opacity 0.15s ease-in-out;
      transition-delay: 0s, ${isOpened || isSuccess ? '0s' : '0.3s'};

      @media ${theme.breakpoints.min.md} {
        font-size: 4rem;
      }
    }

    .card-image,
    img {
      border-radius: 6px;
      height: 100%;
      width: 100%;

      @media ${theme.breakpoints.min.md} {
        border-radius: 10px;
      }
    }

    .card-image {
      border: 1px solid var(--grey);
      background-color: var(--blackLight);
      position: relative;
      transition: transform 0.3s ease-in-out;
      transform-style: preserve-3d;
      transform: ${isOpened || isSuccess ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    }

    img {
      display: block;
      object-fit: cover;
      position: absolute;
      backface-visibility: hidden;
    }

    ${!isOpened &&
    !isSuccess &&
    css`
      &:hover {
        span {
          @media ${theme.breakpoints.min.md} {
            font-size: 5.5rem;
          }
        }
      }
    `}
  `,
);
