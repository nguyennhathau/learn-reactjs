import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='' className='logo' />
        <button className='nav-toggle' onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
      </div>

      <div className={`links-container links ${toggle && 'show-container1'}`}>
        {links.map((item) => {
          const { id, url, text } = item
          return (
            <a href={url} key={id}>
              {text}
            </a>
          )
        })}
      </div>
      <div className='social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <a href={url} key={id}>
              {icon}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
