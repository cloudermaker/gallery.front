import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  const buildHeaderStyle = (patterns: string[], isStrict = false): string => {
    const currentPath = window.location.pathname;

    for (var pattern of patterns) {
      if (isStrict && currentPath === pattern) {
        return 'underline';
      } else if (!isStrict && currentPath.includes(pattern)) {
        return 'underline';
      }
    }

    return '';
  };

  return (
    <header className="flex bg-black text-slate-400 text-lg px-5 py-3 justify-evenly">
      <Link to={'/'} className={buildHeaderStyle(['/'], true)}>
        Home
      </Link>

      <Link to={'/gallery'} className={buildHeaderStyle(['/gallery', '/detail'])}>
        Gallery
      </Link>

      <Link to={'/backoffice'} className={buildHeaderStyle(['/backoffice'])}>
        Backoffice
      </Link>
    </header>
  );
};
