import React from 'react'
import LOGO from "../../assets/image/logo.png"

export const Header = () => {
  return (
    <div className='header'>
      <img className="header-logo" src={LOGO} alt="Logo MS" />
        <div className="header-nav">
          <ul className="header-nav-list">
            <li
             
            >
              Home
            </li>
            <li
           
            >
              About
            </li>
            <li
              
            >
              Skills
            </li>
            <li
             
            >
              Portfolio
            </li>
            <li
        
            >
              Contact
            </li>
          </ul>
        </div>
     

    </div>
  )
}
