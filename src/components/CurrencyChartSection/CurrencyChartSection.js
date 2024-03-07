import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import CurrencyChartHeader from './CurrencyChartHeader'
import TradingViewWidget from './TradingViewWidget'

const CurrencyChartSection = () => {
  return (
    <>
        <Mobile>
            <CurrencyChartHeader />
            <div className="chart-widget-container-mobile">
              <TradingViewWidget/>
            </div>
        </Mobile>
        <Desktop>
            <CurrencyChartHeader/>
            <div className="chart-widget-container-desktop">
              <TradingViewWidget/>
            </div>

        </Desktop>
    </>
  )
}

export default CurrencyChartSection