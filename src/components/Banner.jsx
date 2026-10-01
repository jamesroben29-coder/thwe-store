
import React from 'react'
import AdsLady from "../assets/images/ads-lady2.png";
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <div className='banner-container'>
        <div className="banner-left">
            <h4><span></span>
                Limited Time
            </h4>
            <h1>Save up to <span>40%</span> Premium Laptop and Phone
            </h1>
            <p>
                Upgrade your setup with our biggest sale of the season.
            </p>
            <Link to="/products" className="banner-btn">Buy Now</Link>
        </div>
        <div className="banner-right">
            <div className="banner-img-box">
                <img src={AdsLady} alt="ads-lady2.png" />
            </div>
        </div>
    </div>  
  )
}

export default Banner;