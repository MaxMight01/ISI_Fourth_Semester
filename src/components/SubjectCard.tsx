import { Link } from 'react-router-dom';
import type { Subject } from '../data/subjects';
import '../styles/SubjectCard.css';

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <Link to={`/subject/${subject.id}`} className="subject-card">
      <div className="subject-card-content">
        <h3 className="subject-code">{subject.shortCode}</h3>
        <h2 className="subject-name">{subject.name}</h2>
        <p className="subject-description">{subject.description}</p>
        <div className="subject-card-footer">
          <span className="subject-chapters">{subject.chapters.length} chapter(s)</span>
          <span className="subject-cta">View Notes →</span>
        </div>
      </div>
    </Link>
  );
};
