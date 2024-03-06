import React from 'react'
import { Mobile, Desktop } from '../ScreenView'

const BodyNavigator = () => {
  return (
    <>
    <Mobile>
        <p className="navigator-currency-title-mobile">Cryptocurrencies {'>>'} <span className="navigator-currency-name-mobile">Bitcoin</span></p>
    </Mobile>

    <Desktop>
        <p className="navigator-currency-title-desktop">Cryptocurrencies {'>>'} <span className="navigator-currency-name-desktop">Bitcoin</span></p>
    </Desktop>
    </>
  )
}

export default BodyNavigator