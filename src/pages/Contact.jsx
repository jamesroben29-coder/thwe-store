import ContactHeader from "../components/ContactFiles/ContactHeader";
import ContactMessage from "../components/ContactFiles/ContactMessage";
import ContactLocation from "../components/ContactFiles/ContactLocation";
import ContactFaq from "../components/ContactFiles/ContactFaq";
import ScrollReveal from "../context/ScrollReveal";

const Contact = () => {

  return (
    <>
      <div className='contact-container'>
          <ContactHeader />
      </div>

      <ScrollReveal>
        <div className="contact-contactMessage">
            <ContactMessage/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="contact-Location">
            <ContactLocation/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="contact-faq">
            <ContactFaq/>
        </div>
      </ScrollReveal>
    </>
    
  )
}

export default Contact;