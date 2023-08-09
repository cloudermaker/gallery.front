import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <>
      <nav className="flex bg-black text-slate-400 text-lg px-5 py-3 justify-evenly">
        <Link to={'/'}>Home</Link>
        <Link to={'/gallery'}>Gallery</Link>
        <Link to={'/backoffice'}>Backoffice</Link>
      </nav>
    </>
  );
};
