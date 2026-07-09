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
    let loco: LocomotiveScroll | null = null;

    const initScroll = () => {
      loco = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.09,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        },
      });
      setSmoothScroll(loco);
    };

    // Delay initialization slightly to let the initial render cycles settle.
    // In React Strict Mode, the first mount will be cleaned up immediately,
    // canceling the timeout before LocomotiveScroll is ever instantiated.
    const timer = setTimeout(initScroll, 50);

    return () => {
      clearTimeout(timer);
      if (loco) {
        loco.destroy();
        setSmoothScroll(null);
      }
    };
  }, []);

  return <AppRoutes />;
}

export default App;
