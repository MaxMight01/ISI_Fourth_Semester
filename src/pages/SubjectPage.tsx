import { useParams, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjects';
import { PDFViewer } from '../components/PDFViewer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ExternalLink, Home, AlertCircle } from 'lucide-react';
import '../styles/SubjectPage.css';

export const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubjectById(subjectId) : undefined;

  if (!subject) {
    return (
      <div className="subject-page">
        <div className="error-state">
          <div className="error-icon">
            <AlertCircle size={48} strokeWidth={2} />
          </div>
          <h2>Subject Not Found</h2>
          <p>The subject you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="error-home-link">
            <Home size={18} />
            <span>Back to All Subjects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="subject-page">
      {/* Decorative elements */}
      <div className="page-deco page-deco-1" aria-hidden="true" />
      <div className="page-deco page-deco-2" aria-hidden="true" />
      
      <Breadcrumbs />

      <div className="subject-header">
        <div className="subject-header-content">
          <span className="subject-code-badge">{subject.shortCode}</span>
          <h1>{subject.name}</h1>
          <p className="subject-meta">Fourth Semester • B.Math (Hons.) • ISI Bangalore</p>
        </div>
        
        <a 
          href={subject.courseInfoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="course-info-link"
        >
          <ExternalLink size={18} />
          <span>Course Info</span>
        </a>
      </div>

      <div className="subject-content">
        <div className="pdf-section">
          <PDFViewer pdfPath={subject.pdfPath} title={`${subject.name} — Full Notes`} />
        </div>
      </div>
    </div>
  );
};
