
import React, { useEffect } from 'react'
import { testimonials } from '../data/products';
import { useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {

    const [ cardIndex, setCardIndex ] = useState(0);
    const [ cardToShow, SetCardToShow ] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 678 ){
                SetCardToShow(1);
            }else if(window.innerWidth >= 678 && window.innerWidth < 1024){
                SetCardToShow(2);
            }else{
                SetCardToShow(3);
            }
        }
        handleResize();

        window.addEventListener("resize",handleResize);
        return () => window.addEventListener("resize",handleResize);

    },[]);

    const vasivialCards = testimonials.slice(cardIndex, cardIndex + cardToShow);

    const handleNextCard = () => {
        if(cardIndex + cardToShow < testimonials.length){
            setCardIndex((prev) => prev + 1);
        }
    }

    const handlePrevCard = () => {
        if(cardIndex > 0){
            setCardIndex((prev) => prev - 1);
        }
    }


  return (
    <div className='testimonial-container'>
    <h2>What Our Clients Say!</h2>
    <p className='testi-second-head'>We are appreciate our lovely clients</p>
        <div className='testimonial-list'>
            {vasivialCards.map((testimonial) => 
                <div className="testimonial-card" key={testimonial.id}>
                    <div className="testi-img-box">
                        <img src={testimonial.image} alt="user-1"/>
                    </div>
                    <h3>{testimonial.name}</h3>  
                                    
                    <p>        
                        <Quote size={26} style={{transform: "scale(-1)",color: "var(--primary)"}}/>                
                        &nbsp;&nbsp;{testimonial.description}&nbsp;&nbsp;
                        <Quote  size={26} style={{color: "var(--primary)"}}/>  
                    </p>
                    
                </div>
            )}
        </div>
        
        <div className="pagination-control">
            <button className='pagination-control-btn' disabled={cardIndex === 0} onClick={handlePrevCard}>
                Prev
            </button>

            <button className='pagination-control-btn' disabled={cardIndex + cardToShow >= testimonials.length } 
            onClick={handleNextCard}>
                Next
            </button>
        </div>
    </div>
  )
}

export default Testimonial;