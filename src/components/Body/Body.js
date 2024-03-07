import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import BodyNavigator from './BodyNavigator'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import TrendingCoins from '../TrendingCoins/TrendingCoins'
import CurrencyInformation from '../CurrencyInformation/CurrencyInformation'
import About from '../AboutSection/About'
import Tokenomics from '../Tokenomics/Tokenomics'
import Team from '../Team/Team'

import CurrencyDetails from '../CurrencyDetails/CurrencyDetails'

const Body = () => {
  return (
    <>
    <Mobile>
        <div className="body-container-mobile">
          <BodyNavigator/>
          <div className="body-content-container-mobile">
            <CurrencyDetails/>
            <CurrencyInformation/>
            <About/>
            <Team />
          </div>
          <GetStartedSection/>
        </div>
        <TrendingCoins />
    </Mobile>

    <Desktop>
        <div className="body-container-desktop">
          <BodyNavigator/>
          <div className="body-content-container-desktop">
            <div className="body-primary-content-container-desktop">
              <CurrencyDetails />
              <CurrencyInformation />
              {/* <Sentiment />
  */}
              <About />
              <Tokenomics />
              <Team />
            </div>
            <div className="body-secondary-content-container-desktop">
              <GetStartedSection/>
              <TrendingCoins/>
            </div>
          </div>
        </div>
    </Desktop>
    </>
  )
}

export default Body