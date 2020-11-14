import Header from '../Header';
import Footer from '../Footer';

function Template({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Template;
