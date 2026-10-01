
import React from 'react'
import "./AboutDatas.css";

const AboutJourney = () => {

  return (
    <div className='about-journey-container'>
        <h3>OUR JOURNEY</h3>
        <h2>From 12 products to a movement</h2>

        <div className="about-journey-list">
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2021</div>
                <div className="journey-timeline-text">Founded in Copenhagen with 12 products</div>
            </div>
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2022</div>
                <div className="journey-timeline-text">Reached 10,000 customers across 18 countries</div>
            </div>
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2023</div>
                <div className="journey-timeline-text">Launched the Maison Curation Standard</div>
            </div>
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2024</div>
                <div className="journey-timeline-text">Certified B Corp and carbon-neutral operations</div>
            </div>
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2025</div>
                <div className="journey-timeline-text">Opened editorial spaces in NYC and Tokyo</div>
            </div>
            <div className="about-journey-card">
                <div className="journey-timeline-dot"></div>
                <div className="journey-timeline-year">2026</div>
                <div className="journey-timeline-text">300+ products, zero compromises</div>
            </div>
        </div>
    </div>
  )
}

export default AboutJourney;