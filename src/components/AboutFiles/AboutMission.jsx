
import "./AboutDatas.css";

const AboutMission = () => {

  return (
    <div className='about-mission-container'>
        <p className="mission-header">Our Mission</p>
        <div className='about-mission-list'>
            <div className="mission-left">
                <h2>
                    Connecting makers with people who care about what they own.
                </h2>
                <p className="mission-text">
                    We believe the objects you surround yourself with shape how you think, 
                    work, and live. A well-made tool is a pleasure to use. 
                    A well-designed chair is a pleasure to sit in.That conviction drives every curation decision we make.
                </p>
                <p className="mission-text">
                    
                    Maison is the bridge between the craftspeople, engineers, 
                    and designers who make exceptional things — and the people discerning enough to want them.
                </p>
            </div>
            <div className="mission-right">
                <div className="mission-img-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIW17qJmOdrUwPxNehoCtmz00Um5zhbo3M3bS1T8jUedqCQeDSvJTKW0&s=10" alt="about-mission-image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMission;