
import './App.css'
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

  return (
     <div >
        <HeroPage />
        <ChooseYourGoal />
        <WhatWeDo />
        <HowWeWork/>
        <WhyChooseUs/>
        <AboutVisaGuy />
        <GoogleReviews/>
        <TalkToVisaGuy />
        <VisaGuyFooter />
     </div>
  )
}

export default App;
