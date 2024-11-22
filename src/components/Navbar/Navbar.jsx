import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import ariLogo from '../../assets/ari_logo.png'
const Navbar = () => {

  const [menu,setMenu]=useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img className='navbar-logo' src={ariLogo} alt="logo" />
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={()=>{setMenu("home");closeMenu()}}>Home</p>
          </AnchorLink>
          {menu==="home"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={()=>{setMenu("about");closeMenu()}}>About Me</p>
          </AnchorLink>
          {menu==="about"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#experience'>
            <p onClick={()=>{setMenu("experience");closeMenu()}}>Experience</p>
          </AnchorLink>
          {menu==="experience"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={()=>{setMenu("projects");closeMenu()}}>Projects</p>
          </AnchorLink>
          {menu==="projects"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={()=>{setMenu("contact");closeMenu()}}>Contact</p>
          </AnchorLink>
          {menu==="contact"?<img src={underline} alt=''/>:<></>}
        </li>
      </ul>

      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  )
}

export default Navbar
