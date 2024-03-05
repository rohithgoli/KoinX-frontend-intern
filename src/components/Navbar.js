import React from 'react'
import { Mobile, Desktop } from './ScreenView'

const Navbar = () => {
  return (
    <>
        <Mobile>
            <img 
                src={require("../../public/hamburger-menu-icon.png")} 
                alt="menu-icon"
                className="menu-icon-mobile"
            />    
        </Mobile>

        <Desktop>
            <nav className="navbar-container-desktop">
                <ul className="navitems-container-desktop">
                    <li className="navitem-desktop">Crypto Taxes</li>
                    <li className="navitem-desktop">Free Tools</li>
                    <li className="navitem-desktop">Resource Center</li>
                    <li>
                        <button className="navitem-button">Get Started</button>
                    </li>
                </ul>
            </nav>
        </Desktop>
    </>
  )
}

export default Navbar