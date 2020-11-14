import React from 'react';
import { HeartIcon } from 'src/icons';

import { Container } from '../Grid';
import { FooterWrapper } from './style';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <p className="madeby">
          <span>Made with</span>
          {HeartIcon}
          <span>by</span>
          <a href="https://www.linkedin.com/in/lachiri-mohamed/" target="_blank" rel="noreferrer">
            Mohamed Lachiri
          </a>
        </p>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
