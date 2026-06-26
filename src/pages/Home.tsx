import AboutVisaGuy from '../components/Pages-Ui/HomePage/Aboutvisaguy';
import ChooseYourGoal from '../components/Pages-Ui/HomePage/ChooseYourGoal';
import VisaGuyFooter from '../components/Pages-Ui/HomePage/Footer';
import GoogleReviews from '../components/Pages-Ui/HomePage/GooglereviewsUI';
import HeroPage from '../components/Pages-Ui/HomePage/HeroPage';
import HowWeWork from '../components/Pages-Ui/HomePage/HowWeWork';
import TalkToVisaGuy from '../components/Pages-Ui/HomePage/TalkToVisaGuy';
import WhatWeDo from '../components/Pages-Ui/HomePage/Whatwedo';
import WhyChooseUs from '../components/Pages-Ui/HomePage/Whychooseus';

function Home() {
  return (
    <div>
      <div id="home"><HeroPage /></div>
      <ChooseYourGoal />
      <div id="services" className="scroll-mt-24"><WhatWeDo /></div>
      <div id="how-we-work" className="scroll-mt-24"><HowWeWork /></div>
      <WhyChooseUs />
      <div id="about" className="scroll-mt-24"><AboutVisaGuy /></div>
      <div id="reviews" className="scroll-mt-24"><GoogleReviews /></div>
      <div id="contact" className="scroll-mt-24"><TalkToVisaGuy /></div>
      <VisaGuyFooter />
    </div>
  );
}

export default Home;
