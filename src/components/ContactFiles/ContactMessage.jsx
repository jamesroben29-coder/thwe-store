
import { Mail , PhoneCall , MessageSquareDot } from "lucide-react"
import "./Contact.css";

const ContactMessage = () => {

  return (
    <div className='contact-message-box'>
        <div className="contact-message-left">
            <form className='message-form'>
                <h2>Send us a message</h2>
                <div className='name-and-mail-group'>
                    <label>YOUR NAME
                        <input type="text" placeholder='James Roben' required/>
                    </label>
                    <label>YOUR NAME
                        <input type="text" placeholder='jamesroben29@gmail.com' required/>
                    </label>
                </div>
                <label className='message-option-label'>TOPIC
                    <select>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="order-support">Order Support</option>
                        <option value="returns-and-exchanges">Returns and Exchanges</option>
                        <option value="press-and-media">Press and Media</option>
                        <option value="wholesale-b2b">Wholesale/B2B</option>
                    </select>
                </label>
                <label className='textarea-message'>MESSAGE
                    <textarea name="" role='5' cols="10" required>
                        Tell us how we can help...
                    </textarea>
                </label>

                <p className='characters-count'>0 characters</p>

                <button className='message-btn'>Send Message</button>
            </form>
        </div>

        <div className="contact-message-right">
            <div className="contact-message-card">
                <Mail size={22}/>
                <div className="contact-message-text">
                    <h4>EMAIL</h4>
                    <p>jamesroben29@gmail.com</p>
                    <small>We reply within 24 hours</small>
                </div>
            </div>
            <div className="contact-message-card">
                <PhoneCall size={22}/>
                <div className="contact-message-text">
                    <h4>PHONE</h4>
                    <p>+12345678907</p>
                    <small>Mon-Fri, 9am-6pm EST</small>
                </div>
            </div>
            <div className="contact-message-card">
                < MessageSquareDot size={22}/>
                <div className="contact-message-text">
                    <h4>LIVE CHAT</h4>
                    <p>Start a conversation</p>
                    <small>Average wait: 3 munutes</small>
                </div>
            </div>

            <div className="contact-message-card">
                    <h5>LIVE CHAT</h5>
                    <div className="contact-message-social-links">
                        <p>Instagram</p>
                        <p>@james@shop</p>
                    </div>
                    <div className="contact-message-social-links">
                        <p>Twitter/X</p>
                        <p>@james@shop</p>
                    </div>
                    <div className="contact-message-social-links">
                        <p>Pinterest</p>
                        <p>@james@shop</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactMessage;