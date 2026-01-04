import { useLocation, Link } from 'react-router-dom';
import '../styles/Breadcrumbs.css';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, path };
    }),
  ];

  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="breadcrumb-current">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="breadcrumb-link">
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
