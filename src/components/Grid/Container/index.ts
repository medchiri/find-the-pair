import styled, { css } from 'styled-components';

export const CONTAINER_MAX_WIDTH = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1380,
};

const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;

    ${Object.entries(CONTAINER_MAX_WIDTH).map(
      ([key, value]) => css`
        @media ${theme.breakpoints.min[key]} {
          max-width: ${value}px;
        }
      `,
    )}
  `,
);

export default Container;
