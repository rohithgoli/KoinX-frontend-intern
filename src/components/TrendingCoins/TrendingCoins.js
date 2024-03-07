import React from 'react'
import {useState, useEffect} from 'react';
import {Mobile, Desktop} from '../ScreenView'

import TrendingCoin from './TrendingCoin';
import { TRENDING_COINS_URL, API_STATUS_CONSTANTS } from '../../../utils/constants';

const TrendingCoins = () => {

    const [trendingCoinsList, setTrendingCoinsList] = useState([]);
    const [apiStatus, setApiStatus] = useState("");

    const fetchTrendingCoinsList = async () => {
        setApiStatus(API_STATUS_CONSTANTS.IN_PROGRESS);
        try {
            const response = await fetch(TRENDING_COINS_URL);
            const responseData = await response.json();
            const coinsList = responseData?.coins;
            const trendingCoinsList = coinsList.slice(0,3);
            console.log(trendingCoinsList);
            setTrendingCoinsList(trendingCoinsList);
            setApiStatus(API_STATUS_CONSTANTS.SUCCESS);
        } catch(error) {
            setApiStatus(API_STATUS_CONSTANTS.FAILED);
        }
    }

    useEffect(() => {
        fetchTrendingCoinsList();
    }, [])

  return (
    <>
        <Mobile>
            <div className="trending-coins-section-container-mobile">
                 <h2 className="trending-coins-section-title-mobile">
                    Trending Coins (24h)
                 </h2>
                 {
                    trendingCoinsList.map(coin => 
                        <TrendingCoin key={coin?.item?.id} coinDetails={coin?.item} />
                    )
                 }
            </div>
        </Mobile>

        <Desktop>
            <div className="trending-coins-section-container-desktop">
                <h2 className="trending-coins-section-title-desktop">
                    Trending Coins (24h)
                </h2>
                {
                    trendingCoinsList.map(coin => 
                        <TrendingCoin key={coin?.item?.id} coinDetails={coin?.item} />
                    )
                }
            </div>
        </Desktop>
    </>
  )
}

export default TrendingCoins