import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Mobile, Desktop } from './ScreenView'

const Header = () => {
  return (
    <>
        <Mobile>
            <div className="header-container-mobile">
                <Logo/>
                <Navbar/>
            </div>
        </Mobile>

        <Desktop>
            <div className="header-container-desktop">
                <Logo/>
                <Navbar/>
            </div>
        </Desktop>
    </>

  )
}

export default Header