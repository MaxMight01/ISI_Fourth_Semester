import { SubjectCard } from '../components/SubjectCard';
import { SUBJECTS } from '../data/subjects';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import '../styles/HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Mathematics Decorations */}
      <section className="hero">
        {/* Decorative geometric shapes */}
        <div className="hero-deco hero-deco-circle-1" aria-hidden="true" />
        <div className="hero-deco hero-deco-circle-2" aria-hidden="true" />
        <div className="hero-deco hero-deco-square" aria-hidden="true" />
        
        {/* Mathematical symbols floating */}
        <div className="math-symbol math-symbol-1" aria-hidden="true">π</div>
        <div className="math-symbol math-symbol-2" aria-hidden="true">∂</div>
        <div className="math-symbol math-symbol-3" aria-hidden="true">∇</div>
        <div className="math-symbol math-symbol-4" aria-hidden="true">λ</div>
        <div className="math-symbol math-symbol-5" aria-hidden="true">Σ</div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>Academic Year 2025-2026</span>
          </div>
          <h1>Fourth Semester at ISI, Bangalore</h1>
          <p className="hero-subtitle">B.Math (Hons.) Lecture Notes</p>
          <p className="hero-description">
            A comprehensive collection of lecture notes covered in the fourth semester
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number stat-blue">{SUBJECTS.length}</span>
              <span className="stat-label">Subjects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number stat-emerald">∞</span>
              <span className="stat-label">Theorems</span>
            </div>
            <div className="stat-item">
              <span className="stat-number stat-amber">1</span>
              <span className="stat-label">Semester</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid Section */}
      <section className="subjects-section">
        <div className="section-header">
          <h2>Course Notes</h2>
          <p>Select a subject to view the complete lecture notes</p>
        </div>
        
        <div className="subjects-grid">
          {SUBJECTS.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-deco footer-deco-1" aria-hidden="true" />
        <div className="footer-deco footer-deco-2" aria-hidden="true" />
        
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <h3>About These Notes</h3>
              <p>
                These lecture notes are compiled during the fourth semester of B.Math (Hons.) 
                at the Indian Statistical Institute, Bangalore. They are meant to serve as 
                a study aid and reference material. Future updates may include additional 
                subjects (of the past semesters) and resources.
              </p>
            </div>
            
            <div className="footer-contact">
              <h3>Contact</h3>
              <div className="contact-grid">
                <a href="mailto:ramdassingh399@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label"> Personal Email</span>
                    <span className="contact-value">ramdassingh399@gmail.com</span>
                  </div>
                </a>

                <a href="mailto:bmat2423@isibang.ac.in" className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Institute Email</span>
                    <span className="contact-value">bmat2423@isibang.ac.in</span>
                  </div>
                </a>
                
                <a href="https://github.com/MaxMight01" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon contact-icon-github">
                    <Github size={18} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">MaxMight01</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/ramdas-max-singh/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon contact-icon-linkedin">
                    <Linkedin size={18} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">Ramdas 'Max' Singh</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-credits">
              <span>Built with</span>
              <Heart size={16} className="heart-icon" />
              <span>using React</span>
              {/* <Zap size={16} className="zap-icon" /> */}
            </p>
            <p className="footer-copyright">
              Developed by MaxMight01
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
