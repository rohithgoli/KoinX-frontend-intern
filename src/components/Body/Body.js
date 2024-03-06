import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import BodyNavigator from './BodyNavigator'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import TrendingCoins from '../TrendingCoins/TrendingCoins'

const Body = () => {
  return (
    <>
    <Mobile>
        <div className="body-container-mobile">
          <BodyNavigator/>
          <GetStartedSection/>
        </div>
        <TrendingCoins />
    </Mobile>

    <Desktop>
        <div className="body-container-desktop">
          <BodyNavigator/>
          <GetStartedSection/>
          <TrendingCoins/>
        </div>
    </Desktop>
    </>
  )
}

export default Body