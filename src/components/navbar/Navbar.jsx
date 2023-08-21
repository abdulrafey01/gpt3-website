import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

// BEM : Block Element Modifier = Naming Convention


const Menu = ({handleToggleMenu}) => (
  
 <>
    <p><a href="#home" onClick={() => handleToggleMenu(false)}>Home</a></p>
    <p><a href="#wgpt3" onClick={() => handleToggleMenu(false)}>What is GPT?</a></p>
    <p><a href="#possibility"  onClick={() => handleToggleMenu(false)}>Open AI</a></p>
    <p><a href="#features" onClick={() => handleToggleMenu(false)}>Case Studies</a></p>
    <p><a href="#blog" onClick={() => handleToggleMenu(false)}>Library</a></p>

  </>
)

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu handleToggleMenu={setToggleMenu}/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu handleToggleMenu={setToggleMenu}/>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  )
}
