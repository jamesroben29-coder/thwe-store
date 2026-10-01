
import "./Contact.css";
import { Link } from "react-router-dom";

const ContactHeader = () => {

  return (
    <div className='contact-header'>
        <div className="contact-header-text">
            <h1>Contact us</h1>
            <p>
                "Have a question about an order, or just want to say hello? 
                We are here to help! Reach out to the Thwe-Store team using 
                any of the options below, and we'll get back to you as soon as possible."
            </p>
            <div className="contact-talk-btn-box">
                <Link className='contact-talk-btn'>Let's Talk!</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactHeader;

// https://static.vecteezy.com/system/resources/thumbnails/066/561/522/small/shopping-cart-and-laptop-on-gray-background-with-potted-plant-photo.jpg