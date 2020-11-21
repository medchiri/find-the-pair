import styled, { css } from 'styled-components';

export const CardsWrapper = styled.div`
  position: relative;
`;

export const SuccessMessage = styled.div<{ isSuccess: boolean }>(
  ({ isSuccess, theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--black);
    transition: opacity 0.15s ease-in-out;
    transition-delay: ${isSuccess ? '1s' : '0s'};
    opacity: ${isSuccess ? 1 : 0};
    z-index: ${isSuccess ? 1 : -1};

    p {
      @media ${theme.breakpoints.min.md} {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      strong {
        color: var(--primaryLight);
      }
    }
  `,
);
