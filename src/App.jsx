import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from './Home';
import CaseStudyKoronet from './CaseStudyKoronet';
import CaseStudyMegaMenu from './CaseStudyMegaMenu';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/koronet" element={<CaseStudyKoronet />} />
        <Route path="/case-studies/imehxs-mega-menu" element={<CaseStudyMegaMenu />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
