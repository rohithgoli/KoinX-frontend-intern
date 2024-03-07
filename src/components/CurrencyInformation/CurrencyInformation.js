import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import Performance from './Performance'
import Fundamentals from './Fundamentals'

const CurrencyInformation = () => {
  return (
    <>
        <Mobile>
            <div className="currency-information-container-mobile">
                <Performance/>
                <Fundamentals/>
            </div>
        </Mobile>
        <Desktop>
            <div className="currency-information-container-desktop">
                <Performance/>
                <Fundamentals/>
            </div>
        </Desktop>
    </>
  )
}

export default CurrencyInformation