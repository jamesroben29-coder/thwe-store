
import { Link } from "react-router-dom";
import "./AboutDatas.css";

const AboutHeader = () => {
  return (
    <div className='about-header'>
        <div className="about-header-text">
            <h1>
                About us
            </h1>
            <p>
                Maison started as a reaction to the noise of modern retail — too many options, too little quality. We set out to build something different: a marketplace where every product earns its place.
            </p>
            <div className="about-learn-more">
                <Link className='about-learn-more-btn'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader;