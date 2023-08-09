import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({
  children,
  hasHeader = true,
  hasFooter = true,
}: {
  hasHeader?: boolean;
  hasFooter?: boolean;
  children: JSX.Element;
}): JSX.Element => {
  return (
    <>
      {hasHeader && <Header />}

      <section className="px-5 py-3">{children}</section>

      {hasFooter && <Footer />}
    </>
  );
};
