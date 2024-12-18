import React from 'react'
import './Footer.css'
import ariLogo from '../../assets/ari_logo.png'

const Footer = () => {
  const date=new Date();

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='footer-logo' src={ariLogo} alt="user-icon" />
            <p>I am a full stack developer.</p>
        </div>
        
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bootom-left">&copy; {date.getFullYear()} Arivuselvam. All rights reserved.</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer
