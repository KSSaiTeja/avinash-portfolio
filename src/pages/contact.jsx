import React from 'react'
import ContactOption from '../components/sections/contact/contactOption'
import ContactForm from '../components/sections/contact/contactForm'
import SlideUp from '../utlits/animations/slideUp'

const Contact = () => {
  return (
    <section id="contact" className="contact-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p>Contact</p>
                  <h2>Get in Touch with Me!</h2>
                  <p style={{marginTop: '15px', fontSize: '16px', color: '#666'}}>
                    Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row">
            <ContactOption />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact