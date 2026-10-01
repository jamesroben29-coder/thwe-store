import React from 'react'
import { Headset, ShieldCheck, Truck ,MoveRight} from "lucide-react";
import HeroImg from "../assets/images/Eco-image.png";
import { Link } from "react-router-dom";
import "./components.css";
const Hero = () => {

  return (
    <div className="hero">
        <div className="c-hero-left">
            <h5>DISCOVER YOUR NEXT FAVERATE</h5>
            <h1>Upgrade Your <br />Tech <span> Lifestyle</span></h1>
            <p>Explore a wide range of premium, high-quality electronics designed to elevate your daily routine and fit your modern lifestyle.</p>
            <div className="shop-btn-group">
                <Link className='shop-link'>Shop Now
                    <MoveRight />
                </Link>
                <Link className='learn-more-link'>Learn More</Link>
            </div>
            
            <div className='description-group'>
                <div className='desc-item'>
                    <Truck size={30} className='hero-icons'/>
                    <div className='desc-text'>
                        <span className='desc-head-text'>Free shipping</span>
                        <span className='desc-down-text'>Order's over $50</span>
                    </div>
                </div>
                <div className='desc-item'>
                    <ShieldCheck size={30} className='hero-icons'/>
                    <div className='desc-text'>
                        <span className='desc-head-text'>Secure Payment</span>
                        <span className='desc-down-text'>100% Secure</span>
                    </div>
                </div>
                <div className='desc-item'>
                    <Headset size={30} className='hero-icons'/>
                    <div className='desc-text'>
                        <span className='desc-head-text'>24/7 Supports</span>
                        <span className='desc-down-text'>We're always here</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="c-hero-right">
            <div className="img-box">
                <img src={HeroImg} alt="ecoimage-png" className='hero-image'/>
            </div>
        </div>
    </div>
  )
}

export default Hero;