import React from 'react';

import { Container } from '../Grid';
import { HeaderWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <p>I am header</p>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
