import React from 'react'
import './AboutMe.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import User_img from '../../assets/user-img.avif'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const AboutMe = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={User_img} alt="profile img" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                I’m a motivated frontend developer with a solid grounding in Python, JavaScript, and MERN stack, currently honing my skills at Dr. N.G.P. Institute of Technology. I specialize in building full-featured, responsive applications with a seamless user experience.                
                </p>
                <p>
                With a keen interest in problem-solving and an aptitude for learning new technologies, My experience extends to Power BI, which I use to interpret data insights, supporting data-driven decision-making. I continuously strive to expand my skill set, keeping up with the latest industry standards and development practices, particularly in JavaScript frameworks and optimization techniques.
                </p>

            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"27vw"}}/>
                </div>
                <div className="about-skill">
                    <p>MERN stack</p>
                    <hr style={{width:"25vw"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:"30vw"}}/>
                </div>
                <div className="about-skill">
                    <p>Python</p>
                    <hr style={{width:"34vw"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <div className="about-achievement">
                <h1>3</h1>
                <p>Projects Worked</p>
            </div>
        </AnchorLink>
        <hr />
        <div className="about-achievement">
            <h1>300+</h1>
            <p>Problems in Leetcode</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
