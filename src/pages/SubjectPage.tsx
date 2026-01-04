import { useParams, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjects';
import { PDFViewer } from '../components/PDFViewer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import '../styles/SubjectPage.css';

export const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubjectById(subjectId) : undefined;

  if (!subject) {
    return (
      <div className="subject-page">
        <div className="error-state">
          <h2>Subject not found</h2>
          <p>The subject you're looking for doesn't exist.</p>
          <Link to="/" className="error-home-link">
            ← Back to subjects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="subject-page">
      <Breadcrumbs />

      <div className="subject-header">
        <div>
          <h1>{subject.name}</h1>
          <p className="subject-code-badge">{subject.shortCode}</p>
        </div>
        <a href={subject.courseInfoUrl} target="_blank" rel="noopener noreferrer" className="course-info-link">
          📖 Course Info
        </a>
      </div>

      <div className="subject-info">
        <p>{subject.description}</p>
      </div>

      <div className="subject-content">
        <div className="chapters-sidebar">
          <h3>Chapters</h3>
          <ul className="chapters-list">
            {subject.chapters.map(chapter => (
              <li key={chapter.id} className="chapter-item">
                <span className="chapter-number">Ch. {chapter.number}</span>
                <span className="chapter-title">{chapter.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pdf-section">
          <PDFViewer pdfPath={subject.pdfPath} title={`${subject.name} — Full Notes`} />
        </div>
      </div>
    </div>
  );
};
