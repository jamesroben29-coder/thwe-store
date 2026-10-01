import { Award, HeadsetIcon, PackageSearch, UserRoundCog } from 'lucide-react';
import { Link } from "react-router-dom"

const Servicses = () => {

  return (
    <div className='services-group'>
        <h2 className='serv-head-text'>Featured Services</h2>

        <div className="services-list">
            <div className="services-card">
                <Award size={40} className="services-icon"/>
                <h4>Primium Warranty</h4>
                <p>"Exten your coverage on all premium electronics."</p>
                <Link to="/" className="service-info-link">Learn More</Link>
            </div>
            <div className="services-card">
                <UserRoundCog size={40} className="services-icon"/>
                <h4>Setup Assiatance</h4>
                <p>"Get expert help setting up your new laptop or phone."</p>
                <Link to="/" className="service-info-link">Learn More</Link>
            </div>
            <div className="services-card">
                <PackageSearch size={40} className="services-icon"/>
                <h4>24/7 Supports</h4>
                <p>"Discover and information with your premium electronics."</p>
                <Link to="/" className="service-info-link">Learn More</Link>
            </div>
            <div className="services-card">
                <HeadsetIcon size={40} className="services-icon"/>
                <h4>Certification</h4>
                <p>"Build trust and grow your business with certified tech."</p>
                <Link to="/" className="service-info-link">Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default Servicses;