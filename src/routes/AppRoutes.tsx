import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import Home from '../pages/Home';
import StudyAbroadHome from '../pages/StudyAbroadHome';
import TouristVisasHome from '../pages/TouristVisasHome';
import ComingSoon from '../components/Pages-Ui/ComingSoon/ComingSoon';

// On every route change, jump back to the top of the new page.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-abroad" element={<StudyAbroadHome />} />
        <Route path="/tourist-visas" element={<TouristVisasHome />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
