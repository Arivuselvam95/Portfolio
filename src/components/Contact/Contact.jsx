import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import { Link,BrowserRouter } from 'react-router-dom'
const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "de698469-aa32-4842-beb2-7eccba9913ed");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      alert("Email sent successfully..")  
    } 
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Feel free to get in touch with me.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>arivuselvam439@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Coimbatore</p>

                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>8867205078</p>
                </div>
                <div className="contact-detail">
                    <img src={linkedin} alt="" />
                    <p>arivuselvam-s-478765280</p>
                </div>
                <div className="contact-detail">
                    <img src={github} alt="" />
                    <p>Arivuselvam95</p>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
