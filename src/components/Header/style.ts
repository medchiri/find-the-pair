import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: black;
  text-align: center;

  h1 {
    @media ${({ theme }) => theme.breakpoints.max.sm} {
      font-size: 1rem;
    }
    margin-bottom: 0;
  }
`;
