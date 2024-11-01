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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut maxime necessitatibus optio ipsum vel harum incidunt quia enim quas accusantium!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ratione exercitationem veniam aspernatur optio a, omnis voluptatibus repellendus dolore harum ducimus incidunt deleniti sed numquam.</p>

            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Python</p>
                    <hr style={{width:"70%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <div className="about-achievement">
                <h1>2</h1>
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
