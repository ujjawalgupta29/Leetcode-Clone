import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
import NotFound from './components/NotFound/notFound';
import ProblemPage from './components/ProblemPage/problemPage';
import HomePage from './components/HomePage/homePage';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problem/:problemId" element={<ProblemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
