import AboutHeader from '../components/AboutFiles/AboutHeader';
import AboutStatistics from '../components/AboutFiles/AboutStatistics';
import AboutMission from "../components/AboutFiles/AboutMission";
import AboutCommitments from "../components/AboutFiles/AboutCommitments";
import AboutJourney from "../components/AboutFiles/AboutJourney";
import ScrollReveal from "../context/ScrollReveal";

const About = () => {
    
  return (
    <>
      <div className='about-page-container'>
          <AboutHeader/>
      </div>

      <ScrollReveal>
        <div className="about-page-statistics">
            <AboutStatistics/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="about-page-mission">
            <AboutMission/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="about-page-commitments">
            <AboutCommitments/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="about-journey-timeline">
            <AboutJourney/>
        </div>
      </ScrollReveal>
    </>
  )
}

export default About;