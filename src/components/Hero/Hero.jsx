import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import User_img from '../../assets/user-img.avif'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={User_img} alt="profile-img" />
      <h1><span>I'm Arivuselvam,</span> frontend developer.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat nemo laboriosam voluptatum quidem quod minima perferendis inventore maiores facere.</p>
      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
