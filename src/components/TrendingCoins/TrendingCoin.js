import React from 'react'
import { Mobile, Desktop } from '../ScreenView'

const TrendingCoin = ({coinDetails}) => {

    const {small: coinIconImgLink, name, symbol, data} = coinDetails;
    const {price_change_percentage_24h} = data;
    const {inr} = price_change_percentage_24h;
    const roundedInr = inr < 0 ? Math.round(inr, 2)*(-1) : Math.round(inr, 2);

    const trendChangeClassName = inr >= 0.00 ? "trending-coin-trend-container-mobile" : "trending-coin-trend-down-container-mobile" 

  return (
    <>
        <Mobile>
            <div className="trending-coin-details-container-mobile">
                <img 
                    src={coinIconImgLink} 
                    alt={`${name}-image`} 
                    className="trending-coin-image-mobile"
                />
                <p className="trending-coin-name-mobile">{name}{` (${symbol})`}</p>
                <div className={trendChangeClassName}>
                    <p>{roundedInr}<span>%</span></p>
                </div>
            </div>
        </Mobile>
        <Desktop>
            <div className="trending-coin-details-container-desktop">
                <img 
                    src={coinIconImgLink} 
                    alt={`${name}-image`} 
                    className="trending-coin-image-desktop"
                />
                <p className="trending-coin-name-desktop">{name}{` (${symbol})`}</p>
                <div className={trendChangeClassName}>
                    <p>{roundedInr}<span>%</span></p>
                </div>
            </div>
        </Desktop>
    </>
  )
}

export default TrendingCoin