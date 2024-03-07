import React from 'react'
import CurrencyBasicDetails from './CurrencyBasicDetails'
import CurrencyPriceDetails from './CurrencyPriceDetails'
import CurrencyChartSection from '../CurrencyChartSection/CurrencyChartSection'
import { Mobile, Desktop } from '../ScreenView'
import CurrencyChartSection from '../CurrencyChartSection/CurrencyChartSection'

const CurrencyDetails = () => {
  return (
    <>
        <Mobile>
            <CurrencyBasicDetails />
            <div className="currency-details-container-mobile">
                <CurrencyPriceDetails />
                <CurrencyChartSection />
            </div>

        </Mobile>
        <Desktop>
            <div className="currency-details-container-desktop">
                <CurrencyBasicDetails />
                <CurrencyPriceDetails />
                <CurrencyChartSection />
            </div>            
        </Desktop>
    </>
  )
}

export default CurrencyDetails