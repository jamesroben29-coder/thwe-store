
import React from 'react'
import "./Contact.css";

const ContactLocation = () => {

  return (
    <div className='contact-location-container'>
        <p className='location-head-p'>OUR LOCATIONS</p>
        <h2 className='location-head-h2'>Editorial Spaces</h2>

        <div className="location-card-group">
            <div className="location-card">
                <div className="location-img-box">
                    <img src="https://www.kkday.com/en-ph/blog/wp-content/uploads/shutterstock_57571180-1170x680.jpg" 
                    alt="new-york-city-image" />
                </div>
                <div className="location-text">
                    <h4>New York</h4>
                    <div className="contact-city-street">
                        <p>45 Green Street, USA</p>
                        <p>New York, NY 10013</p>
                    </div>

                    <div className='loaction-time-group'>
                        <small>Mon-Fri, 10am-7pm</small>
                        <small>Sat: 11am-6pm</small>
                    </div>
                </div>
            </div>

            <div className="location-card">
                <div className="location-img-box">
                    <img src="https://www.islands.com/img/gallery/this-city-known-as-frances-food-capital-is-a-less-crowded-budget-alternative-to-paris/intro-1718031290.jpg" 
                    alt="new-york-city-image" />
                </div>
                <div className="location-text">
                    <h4>Lyon City</h4>
                    <div className="contact-city-street">
                        <p>11 Main Street - 203, France</p>
                        <p>Lyon City, LC 10314 </p>
                    </div>

                    <div className='loaction-time-group'>
                        <small>Mon-Fri, 10am-7pm</small>
                        <small>Sat: 10am-8pm</small>
                    </div>
                </div>
            </div>

            <div className="location-card">
                <div className="location-img-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFrkEeFdwasxPX1ikNdYKiY12QAqoPhsgQh9k9akUtd2uo27p1ihdtZ0&s=10" 
                    alt="new-york-city-image" />
                </div>
                <div className="location-text">
                    <h4>Sittwe City</h4>
                    <div className="contact-city-street">
                        <p>Riverfront road, Arakan</p>
                        <p>Sittwe City , SC 10055</p>
                    </div>

                    <div className='loaction-time-group'>
                        <small>Mon-Fri, 10am-7pm</small>
                        <small>Sat: 7am-5pm</small>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default ContactLocation;