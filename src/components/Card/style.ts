import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{
  isOpened: boolean;
  isSuccess: boolean;
}>(
  ({ theme, isOpened, isSuccess }) => css`
    cursor: pointer;
    height: 4rem;
    width: 4rem;
    perspective: 20rem;
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out 1s;
    opacity: ${isSuccess ? 0 : 1};

    @media ${theme.breakpoints.min.md} {
      height: 10rem;
      width: 10rem;
    }

    .image-wrapper {
      border-radius: 10px;
      border: 1px solid var(--grey);
      background-color: var(--blackLight);
      position: relative;
      height: 100%;
      width: 100%;
      transition: transform 0.3s ease-in-out;
      transform-style: preserve-3d;
      transform: ${isOpened || isSuccess ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    }

    img {
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      backface-visibility: hidden;
    }

    ${!isOpened &&
    !isSuccess &&
    `
      &:hover {
        transform: scale(1.1);
      }
    `}
  `,
);
