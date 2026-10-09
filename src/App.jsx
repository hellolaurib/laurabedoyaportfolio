import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from './Home';
import CaseStudyKoronet from './CaseStudyKoronet';
import CaseStudyMegaMenu from './CaseStudyMegaMenu';
import CaseStudyMuukTest from './CaseStudyMuukTest';
import CaseStudyUrbanEvolutions from './CaseStudyUrbanEvolutions';
import CaseStudyBarrio from './CaseStudyBarrio';
import VisualDesigner from './VisualDesigner';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/koronet" element={<CaseStudyKoronet />} />
        <Route path="/case-studies/imehxs-mega-menu" element={<CaseStudyMegaMenu />} />
        <Route path="/case-studies/muuktest" element={<CaseStudyMuukTest />} />
        <Route path="/case-studies/reclaimed-wood" element={<CaseStudyUrbanEvolutions />} />
        <Route path="/visual-design" element={<VisualDesigner />} />
        <Route path="/visual-design/barrio" element={<CaseStudyBarrio />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
