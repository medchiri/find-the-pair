import styled, { keyframes } from 'styled-components';

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.8);
  }
`;

export const FooterWrapper = styled.footer`
  font-size: 14px;
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &,
  a {
    color: white;
  }

  .madeby {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  img,
  span,
  svg,
  a {
    display: block;
  }

  svg {
    height: 1.5em;
    width: 1.5em;
    margin-left: 8px;
    margin-right: 8px;
    fill: red;
    animation: ${heartbeat} 0.5s infinite alternate;
  }

  a {
    border-bottom: 1px solid white;
    margin-left: 6px;
    padding-bottom: 2px;
    align-self: flex-end;

    &:hover {
      color: var(--secondary);
      border-bottom-color: var(--secondary);
    }
  }

  p:last-child {
    margin-bottom: 0;
  }

  img {
    height: 4rem;
  }
`;
