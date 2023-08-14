import { Footer } from './footer';
import { Header } from './header';
import '../../index.css';

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
    <div className="body">
      {hasHeader && <Header />}

      <section className="body-content px-5 py-3">{children}</section>

      {hasFooter && <Footer />}
    </div>
  );
};
