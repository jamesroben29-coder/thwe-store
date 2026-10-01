import { Mail } from "lucide-react";
import { Link } from "react-router-dom"

const DirectMessage = () => {
  return (
    <div className='direct-message-container'>
        <div className="direct-mess-left">
            <Mail className='mail-btn' size={22}/>
            <div className='direct-left-text'>
                <h2>Stay Updated</h2>
                <p>Get the latest offers, new arrivals and exclusive deals.</p>
            </div>
        </div>
        <div className="direct-mess-right">
            <input type="text" placeholder='Enter your email'/>
            <Link className="subscribe-btn">Subscribe</Link>
        </div>
    </div>
  )
}

export default DirectMessage;