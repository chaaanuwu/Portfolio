import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ContactForm = ({ contact }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs
            .sendForm('servChNK', 'tempChNK', e.target, 'fPLSno3XP6HrreqN9')
            .then((result) => {
                console.log(result.text);
                setStatus('Message Sent Successfully!');
                setIsSuccess(true);
                setShowPopup(true);
                resetForm();
            })
            .catch((error) => {
                console.error(error.text);
                setStatus('Error sending message. Please try again later.');
                setIsSuccess(false);
                setShowPopup(true);
            });
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.classList.contains('overlay')) {
                closePopup();
            }
        };

        if (showPopup) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showPopup]);

    // Close popup after 5 seconds
    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
                setShowPopup(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showPopup]);

    return (
        <>
            <section id='contact'>
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact">
                    <div className="contact-content">
                        <h2>Get in Touch</h2>
                        <p>
                            Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
                            Feel free to reach out and I'll get back to you as soon as possible!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </div>
                            <div className="contact-item">
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </div>
                            <div className="contact-item">
                                <span><FontAwesomeIcon icon={faLocationDot} /></span>
                                <p><a href={`https://www.google.com/maps/search/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer">
                                    {contact.address}
                                </a>
                                </p>
                            </div>
                        </div>
                        <div className="round"></div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-group">
                                <label htmlFor="name">Name<span>*</span></label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <br />
                            <div className="input-group">
                                <label htmlFor="email">Email<span>*</span></label>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <br />
                            <div className="input-group">
                                <label htmlFor="phone">Phone (optional)</label>
                                <br />
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <br />
                            <div className="input-group">
                                <label htmlFor="message">Message<span>*</span></label>
                                <br />
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <br />
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ContactForm;