
import React, { useState } from 'react'
import "./Contact.css";
import { faqDatas } from "../../data/products"

const ContactFaq = () => {

    const [ openId , setOpenId ] = useState(null);

    const handleToggleFaq = (id) => {
        setOpenId(prevId => prevId === id ? null : id);
    }

  return (
    <div className='contact-faq-container'>
        <p className="faq-head-p">FAQ</p>
        <h2 className="faq-head-h2">
            Common Questions
        </h2>
        {faqDatas.map((faqData) => {
            const isOpen = openId === faqData.id;

            return(
                <div key={faqData.id} className={`faq-item ${isOpen ? "active" : ""}`}>
                    <button className='faq-question' onClick={() => handleToggleFaq(faqData.id)}>
                        <span>{faqData.question}</span>
                        <span className='faq-toggle'>{isOpen ? "x" : "+"}</span>
                    </button>

                    <div className="faq-answer-wrapper">
                        <div className="faq-answer">
                            <p>{faqData.answer}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContactFaq;