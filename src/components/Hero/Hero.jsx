import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import User_img from '../../assets/user-img.avif'
import res from '../../assets/myResume.pdf'
import Typewriter from "typewriter-effect";

const Hero = () => {

  const handleButtonClick = () => {
    
    window.open(res, '_blank');
  };

  return (
    <div id='home' className='hero'>
        <img src={User_img} alt="profile-img" />
        <h1>
          <span>
            <Typewriter
              options={{
                strings: ["I'm Arivuselvam", "Full Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p>
        "Passionate developer skilled in Python, JavaScript, MERN stack, and problem-solving, with hands-on experience in data analytics, and Power BI. Currently studying at Dr. N.G.P. Institute of Technology, I’m dedicated to continuously expand my expertise in modern development technologies."
        </p>
        <div className="hero-action">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <div className="hero-connect">Connect with me</div>
            </AnchorLink>
            <div className="hero-resume" onClick={handleButtonClick}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero
