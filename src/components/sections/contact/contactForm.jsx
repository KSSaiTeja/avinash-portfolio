import React, { useState } from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Format the email message nicely
        const subject = encodeURIComponent(`Contact from ${formData.name} - Portfolio Inquiry`)
        const body = encodeURIComponent(
            `Hello Avinash,\n\n` +
            `My name is ${formData.name}.\n\n` +
            `${formData.message}\n\n` +
            `Best regards,\n` +
            `${formData.name}\n` +
            `Email: ${formData.email}`
        )
        
        // Create mailto link
        const mailtoLink = `mailto:n.avavinash@gmail.com?subject=${subject}&body=${body}`
        
        // Open email client
        window.location.href = mailtoLink
        
        // Reset form after a short delay
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }, 1000)
    }

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="form-control" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name" 
                                        required 
                                        data-error="Please enter your Name" 
                                    />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className="form-control" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com" 
                                        required 
                                        data-error="Please enter your Email" 
                                    />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        className="form-control" 
                                        rows="4" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..." 
                                        required 
                                        data-error="Please Write your Message"
                                    ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    <div id="msgSubmit" className="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm