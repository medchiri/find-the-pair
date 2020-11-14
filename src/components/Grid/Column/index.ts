import styled, { css } from 'styled-components';

const Column = styled.div(
  ({ theme }) => css`
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  `,
);

export default Column;
