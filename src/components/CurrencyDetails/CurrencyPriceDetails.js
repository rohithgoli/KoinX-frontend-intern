import React from 'react';
import {useState, useEffect} from 'react';
import { Mobile, Desktop } from '../ScreenView';
import { API_STATUS_CONSTANTS } from '../../../utils/constants';
import { CURRENCY_PRICE_DETAILS_BASE_URL, CURRENCY_PRICE_DETAILS_URL_PARAMS } from '../../../utils/constants';


const CurrencyPriceDetails = () => {

    const [currencyPriceDetails, setCurrencyPriceDetails] = useState({});
    const [apiStatus, setApiStatus] = useState("");

    const fetchPriceDetails = async () => {
        setApiStatus(API_STATUS_CONSTANTS.IN_PROGRESS);
        try {
            const response = await fetch(`${CURRENCY_PRICE_DETAILS_BASE_URL}bitcoin${CURRENCY_PRICE_DETAILS_URL_PARAMS}`);
            const responseData = await response.json();
            const priceDetails = responseData['bitcoin'];
            
            setCurrencyPriceDetails(priceDetails);
            setApiStatus(API_STATUS_CONSTANTS.SUCCESS);
        } catch(error) {
            setApiStatus(API_STATUS_CONSTANTS.FAILED);
        }
    }

    useEffect(() => {
        fetchPriceDetails();
    }, []);

    let roundedUsdChange = "";
    let trendChangeClassName = "";

    let formattedUsd = "";
    let formattedInr = "";

    if(currencyPriceDetails?.usd_24h_change) {
        const usdChange = currencyPriceDetails?.usd_24h_change;
        roundedUsdChange =  usdChange < 0 ? usdChange.toFixed(2) * (-1) : usdChange.toFixed(2);
        trendChangeClassName = usdChange < 0 ? "currency-price-down-change" : "currency-price-up-change";
    }

    if(currencyPriceDetails?.usd) {
        const usd = currencyPriceDetails?.usd;
        const roundedUsd = parseFloat(usd.toFixed(2));
        formattedUsd = roundedUsd.toLocaleString();
    }

    if(currencyPriceDetails?.inr) {
        const inr = currencyPriceDetails?.inr;
        const roundedInr = parseFloat(inr.toFixed(2));
        formattedInr = roundedInr.toLocaleString("en-IN", {style: "currency", currency: "INR"})
    }


  return (
    <>
        <Mobile>
            {
                apiStatus === API_STATUS_CONSTANTS.IN_PROGRESS ? <p>Loading...</p>
                :
                <div className="currency-price-details-container-mobile">
                    <div className="currency-price-container-mobile">
                        { currencyPriceDetails?.usd && <h2><span>$</span>{formattedUsd}</h2> }
                        { currencyPriceDetails?.inr && <h5 className="currency-inr-mobile">{`${formattedInr}`}</h5> }
                    </div>
                    <div className={trendChangeClassName}>
                        <p>{roundedUsdChange}<span>%</span></p>
                    </div>
                    <p className="currency-price-change-duration">{`(24H)`}</p>
                </div>
            }
        </Mobile>
        <Desktop>
            {
                apiStatus === API_STATUS_CONSTANTS.IN_PROGRESS ? <p>Loading...</p>
                :
                <div className="currency-price-details-container-desktop">
                    <div className="currency-price-container-desktop">
                        { currencyPriceDetails?.usd && <h1><span>$</span>{formattedUsd}</h1> }
                        { currencyPriceDetails?.inr && <h5 className="currency-inr">{`${formattedInr}`}</h5> }
                    </div>
                    <div className={trendChangeClassName}>
                        <p>{roundedUsdChange}<span>%</span></p>
                    </div>
                    <p className="currency-price-change-duration">{`(24H)`}</p>
                </div>
            }
        </Desktop>
    </>
  )
}

export default CurrencyPriceDetails