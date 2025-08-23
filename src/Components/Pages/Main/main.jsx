import ShaadiNavbar from '../../Navbar/navbar'
import HeroSection from '../../main/mainpage_section'
import ShaadiExperience from '../../experiance'
import FounderQuote from '../../quote'
import RealStoriesCarousel from '../../succes_wed'
import FaqAccordion from '../../Question'
import ExploreTabs from '../../perk/perk'
import Footer from '../../footer/footer'
import './main.css';


function Main() {
 
    return (
      <>
      <ShaadiNavbar/>
      <HeroSection/>
      <ShaadiExperience/>
      <FounderQuote/>
      <RealStoriesCarousel/>
      <FaqAccordion/>
      <ExploreTabs/>
      <Footer/>
  
      </>
    )
  }
  
  export default Main