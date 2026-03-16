import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Home, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      {/* Decorative mathematical elements */}
      <div className="header-deco header-deco-1" aria-hidden="true">∫</div>
      <div className="header-deco header-deco-2" aria-hidden="true">∑</div>
      <div className="header-deco header-deco-3" aria-hidden="true">∞</div>
      
      <div className="header-container">
        <Link to="/" className="header-brand">
          <div className="header-icon">
            <GraduationCap size={28} strokeWidth={2.5} />
          </div>
          <div className="header-title">
            <h1>Fourth Semester</h1>
            <p>ISI Bangalore — B.Math (Hons.)</p>
          </div>
        </Link>
        
        <div className="header-actions">
          {!isHome && (
            <Link to="/" className="nav-link">
              <Home size={18} />
              <span>All Subjects</span>
            </Link>
          )}
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} strokeWidth={2.5} />
            ) : (
              <Sun size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
