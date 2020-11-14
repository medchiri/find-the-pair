import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{
  isOpened: boolean;
}>(
  ({ isOpened }) => css`
    display: flex;
    border: 2px solid red;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    margin: 10px;
    height: 10rem;
    width: 10rem;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: ${isOpened ? 1 : 0};
    }
  `,
);
