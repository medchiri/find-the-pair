import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyles } from './style';

function Template({ children }: any) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Template;
