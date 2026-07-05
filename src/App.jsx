import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaseStudyKoronet from './CaseStudyKoronet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies/koronet" element={<CaseStudyKoronet />} />
    </Routes>
  );
}

export default App;
