import { useState } from 'react';
import { SubjectCard } from '../components/SubjectCard';
import { SearchBar } from '../components/SearchBar';
import { SUBJECTS, searchSubjects } from '../data/subjects';
import '../styles/HomePage.css';

export const HomePage = () => {
  const [filteredSubjects, setFilteredSubjects] = useState(SUBJECTS);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredSubjects(SUBJECTS);
    } else {
      setFilteredSubjects(searchSubjects(query));
    }
  };

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Fourth Semester at ISI, Bangalore</h1>
        <p className="hero-subtitle">B.Math (Hons.) — Academic Year 2025–2026</p>
        <p className="hero-description">
          Welcome to the fourth semester notes site. Browse and view lecture notes for your courses.
        </p>
      </section>

      <section className="search-section">
        <SearchBar onSearch={handleSearch} placeholder="Search subjects by name or code..." />
      </section>

      {filteredSubjects.length > 0 ? (
        <section className="subjects-grid">
          {filteredSubjects.map(subject => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </section>
      ) : (
        <section className="no-results">
          <p>No subjects found matching your search.</p>
          <button onClick={() => handleSearch('')} className="reset-btn">
            Clear search
          </button>
        </section>
      )}

      <footer className="home-footer">
        <p>
          📧 Contact: <a href="mailto:bmat2423@isibang.ac.in">bmat2423@isibang.ac.in</a>
        </p>
      </footer>
    </div>
  );
};
