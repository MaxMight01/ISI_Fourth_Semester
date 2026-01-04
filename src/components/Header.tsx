import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-title">
          <h1>📚 Fourth Semester Notes</h1>
          <p>ISI Bangalore — B.Math (Hons.)</p>
        </Link>
        {!isHome && (
          <nav className="header-nav">
            <Link to="/" className="nav-link">← Back to Subjects</Link>
          </nav>
        )}
      </div>
    </header>
  );
};
