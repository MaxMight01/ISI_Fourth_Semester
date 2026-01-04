import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subject/:subjectId" element={<SubjectPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
