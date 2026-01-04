import { SubjectCard } from '../components/SubjectCard';
import { SUBJECTS } from '../data/subjects';
import '../styles/HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Fourth Semester at ISI, Bangalore</h1>
        <p className="hero-subtitle">B.Math (Hons.) — Academic Year 2025-2026</p>
        <p className="hero-description">
          Welcome to the fourth semester notes site. Browse and view lecture notes for the courses.
        </p>
      </section>

      <section className="subjects-grid">
        {SUBJECTS.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </section>

      <footer className="home-footer">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>
            <strong>Name:</strong> Ramdas Singh
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:ramdassingh399@gmail.com">ramdassingh399@gmail.com</a>
          </p>
          <p>
            <strong>Institute Email:</strong>{' '}
            <a href="mailto:bmat2423@isibang.ac.in">bmat2423@isibang.ac.in</a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/MaxMight01" target="_blank" rel="noopener noreferrer">
              MaxMight01
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/ramdas-max-singh/" target="_blank" rel="noopener noreferrer">
              Ramdas 'Max' Singh
            </a>
          </p>
        </div>
        <p className="footer-credits">
          Built with React + Vite | Hosted on GitHub Pages
        </p>
      </footer>
    </div>
  );
};
