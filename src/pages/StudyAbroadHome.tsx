import StudyAbroadHero from '../components/Pages-Ui/StudyAboradUi/HeroPage';
import WhyStudyAbroad from '../components/Pages-Ui/StudyAboradUi/Whystudyabroad';
import VisaGuyFooter from '../components/Pages-Ui/HomePage/Footer';
import TopDestinations from '../components/Pages-Ui/StudyAboradUi/Topdestinations';
import CoursesAndJourney from '../components/Pages-Ui/StudyAboradUi/Coursesandjourney';
import DocumentsAndWhyChoose from '../components/Pages-Ui/StudyAboradUi/Documentsandwhychoose';
import Navbar from '../components/Pages-Ui/HomePage/Navbar';

function StudyAbroadHome() {
  return (
    <div>
      <Navbar />
      <div id="study-abroad-home"><StudyAbroadHero /></div>
      <WhyStudyAbroad />
      <div id="top-destinations"><TopDestinations /></div>
      <CoursesAndJourney />
      <DocumentsAndWhyChoose />
      <VisaGuyFooter />
    </div>
  );
}

export default StudyAbroadHome;
