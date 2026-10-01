
import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingBag } from 'lucide-react';
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='footer-card'>
                <header>
                    <ShoppingBag size={23} className="shopping-logo" />
                    <h2>Thwe-<span>Store</span></h2>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="social-link">
                    <FaFacebook size={25} color="#1877F2" className="icon-hover" />
                    <FaYoutube size={25} color="#FF0000" className="icon-hover" />
                    <FaLinkedin size={25} color="#0A66C2" className="icon-hover" />
                    <FaTwitter size={25} color="#1DA1F2" className="icon-hover" />
                </div>
            </div>

        <div className='footer-card'>
            <h4>Company</h4>
            <ul>
                <li>
                    <Link className="footer-text-link">Home</Link>
                </li>
                <li>
                    <Link className="footer-text-link">Products</Link>
                </li>
                <li>
                    <Link className="footer-text-link">About</Link>
                </li>
                <li>
                    <Link className="footer-text-link">Contact</Link>
                </li>
            </ul>
        </div>

        <div className='footer-card'>
            <h4>Prdoucts</h4>
            <ul>
                <li>
                    <Link className="footer-text-link">Electronics</Link>
                </li>
                <li>
                    <Link className="footer-text-link">Cosmetics</Link>
                </li>
                <li>
                    <Link className="footer-text-link">Health Cares</Link>
                </li>
                <li>
                    <Link className="footer-text-link">Constructions</Link>
                </li>
            </ul>
        </div>
        
            <div className='footer-card'>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link className="footer-text-link">Facebook</Link></li>
                    <li><Link className="footer-text-link">Twitter</Link></li>
                    <li><Link className="footer-text-link">LinkedIn</Link></li>
                    <li><Link className="footer-text-link">YouTube</Link></li>
                </ul>
            </div>


        </footer>
        <br />
        <div className="footer-line">
            <span></span>
        </div>
        <div className="copy-right-group">
            <p>&copy; {new Date().getFullYear()} Thwe-Store. All rights reserved.</p>
            <p>Pravicy Policy by Thwe Chay</p>
        </div>
    </>
  )
}

export default Footer;