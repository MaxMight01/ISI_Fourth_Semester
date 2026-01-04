import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import '../styles/Breadcrumbs.css';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/', isHome: true },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, path, isHome: false };
    }),
  ];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="breadcrumb-item">
          {index > 0 && (
            <ChevronRight size={16} className="breadcrumb-separator" aria-hidden="true" />
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="breadcrumb-current" aria-current="page">
              {crumb.label}
            </span>
          ) : (
            <Link to={crumb.path} className="breadcrumb-link">
              {crumb.isHome ? (
                <>
                  <Home size={14} />
                  <span>Home</span>
                </>
              ) : (
                crumb.label
              )}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
