import React from 'react'
import { Mobile, Desktop } from './ScreenView'
import { BRAND_LOGO_URL } from '../../utils/constants'

const Logo = () => {
  return (
    <>
        <Mobile>
            <img 
                src={BRAND_LOGO_URL}
                alt="koinX-brand-logo" 
                className="logo-mobile"
            />
        </Mobile>

        <Desktop>
            <img 
                src={BRAND_LOGO_URL}
                alt="koinX-brand-logo"
                className="logo-desktop" 
            />
        </Desktop>
    </>
  )
}

export default Logo