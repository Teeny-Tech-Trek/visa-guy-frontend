import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css';
import './App.css';
import { setSmoothScroll } from './lib/smoothScroll';
import AppRoutes from './routes/AppRoutes';

function App() {
  useEffect(() => {
    // Locomotive Scroll v5 (Lenis-based, native scroll) — smooth scrolling
    // for the whole page. Native-scroll keeps the fixed navbar and all
    // framer-motion whileInView reveals working correctly.
    const loco = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      },
    });
    setSmoothScroll(loco);

    return () => {
      loco.destroy();
      setSmoothScroll(null);
    };
  }, []);

  return <AppRoutes />;
}

export default App;
