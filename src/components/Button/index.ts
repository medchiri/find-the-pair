import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  border: 0;
  border-radius: 0.5rem;
  color: white;
  background-color: var(--primary);
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export default Button;
