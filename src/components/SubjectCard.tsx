import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sigma, CircleDot, Infinity, Atom, Asterisk } from 'lucide-react';
import type { Subject } from '../data/subjects';
import '../styles/SubjectCard.css';

interface SubjectCardProps {
  subject: Subject;
  index: number;
}

// Map subject IDs to icons and accent colors
const subjectThemes: Record<string, { icon: React.ReactNode; colorClass: string }> = {
  'topology': { 
    icon: <CircleDot size={24} strokeWidth={2.5} />, 
    colorClass: 'card-emerald' 
  },
  'rings-modules': { 
    icon: <Asterisk size={24} strokeWidth={2.5} />, 
    colorClass: 'card-purple' 
  },
  'ordinary-differential-equations': { 
    icon: <Infinity size={24} strokeWidth={2.5} />, 
    colorClass: 'card-amber' 
  },
  'linear-models-regression': { 
    icon: <Sigma size={24} strokeWidth={2.5} />, 
    colorClass: 'card-blue' 
  },
  'electrodynamics': { 
    icon: <Atom size={24} strokeWidth={2.5} />, 
    colorClass: 'card-blue' 
  },
};

// Fallback for subjects not in the map
const getTheme = (id: string, index: number) => {
  if (subjectThemes[id]) return subjectThemes[id];
  const colors = ['card-blue', 'card-emerald', 'card-amber', 'card-purple'];
  return { 
    icon: <BookOpen size={24} strokeWidth={2.5} />, 
    colorClass: colors[index % colors.length] 
  };
};

export const SubjectCard = ({ subject, index }: SubjectCardProps) => {
  const theme = getTheme(subject.id, index);
  
  return (
    <Link to={`/subject/${subject.id}`} className={`subject-card ${theme.colorClass}`}>
      <div className="subject-card-content">
        <div className="card-icon-wrapper">
          {theme.icon}
        </div>
        
        <div className="card-text">
          <span className="subject-code">{subject.shortCode}</span>
          <h3 className="subject-name">{subject.name}</h3>
        </div>
        
        <div className="card-action">
          <span>View Notes</span>
          <ArrowRight size={18} className="arrow-icon" />
        </div>
      </div>
    </Link>
  );
};
