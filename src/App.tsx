
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css';
import './App.css'
import { setSmoothScroll } from './lib/smoothScroll';
import ComingSoon from './components/Pages-Ui/ComingSoon/ComingSoon';
import AboutVisaGuy from './components/Pages-Ui/HomePage/Aboutvisaguy';
import ChooseYourGoal from './components/Pages-Ui/HomePage/ChooseYourGoal';
import VisaGuyFooter from './components/Pages-Ui/HomePage/Footer';
import GoogleReviews from './components/Pages-Ui/HomePage/GooglereviewsUI';
import HeroPage from './components/Pages-Ui/HomePage/HeroPage';
import HowWeWork from './components/Pages-Ui/HomePage/HowWeWork';
import TalkToVisaGuy from './components/Pages-Ui/HomePage/TalkToVisaGuy';
import WhatWeDo from './components/Pages-Ui/HomePage/Whatwedo';
import WhyChooseUs from './components/Pages-Ui/HomePage/Whychooseus';

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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  )
}

function Home() {
  return (
     <div >
        <div id="home"><HeroPage /></div>
        <ChooseYourGoal />
        <div id="services" className="scroll-mt-24"><WhatWeDo /></div>
        <div id="how-we-work" className="scroll-mt-24"><HowWeWork/></div>
        <WhyChooseUs/>
        <div id="about" className="scroll-mt-24"><AboutVisaGuy /></div>
        <div id="reviews" className="scroll-mt-24"><GoogleReviews/></div>
        <div id="contact" className="scroll-mt-24"><TalkToVisaGuy /></div>
        <VisaGuyFooter />
     </div>
  )
}

export default App;
