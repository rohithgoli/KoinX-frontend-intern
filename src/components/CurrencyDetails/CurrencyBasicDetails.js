import React from 'react'
import {useState, useEffect} from 'react';
import {Mobile, Desktop} from '../ScreenView';
import { CURRENCY_DETAILS_BASE_URL, CURRENCY_DETAILS_URL_PARAMS } from '../../../utils/constants';
import { API_STATUS_CONSTANTS } from '../../../utils/constants';

const CurrencyBasicDetails = () => {

    const [currencyDetails, setCurrencyDetails] = useState({})
    const [apiStatus, setApiStatus] = useState("");

    const fetchCurrencyDetails = async () => {
        setApiStatus(API_STATUS_CONSTANTS.IN_PROGRESS);
        try {
            const response = await fetch(`${CURRENCY_DETAILS_BASE_URL}bitcoin${CURRENCY_DETAILS_URL_PARAMS}`);
            const responseData = await response.json();
            const {name, symbol, market_cap_rank} = responseData;
            const {image} = responseData;
            const currencyDetails = {
                name,
                symbol: symbol.toUpperCase(),
                rank: market_cap_rank,
                logoUrl: image?.small 
            }
            setCurrencyDetails(currencyDetails);
            setApiStatus(API_STATUS_CONSTANTS.SUCCESS);
        } catch(error) {
            setApiStatus(API_STATUS_CONSTANTS.FAILED);
        }
    }

    useEffect(() => {
        fetchCurrencyDetails();
    }, []);

  return (
    <>
        <Mobile>
            {
                apiStatus === API_STATUS_CONSTANTS.IN_PROGRESS ? <p>Loading...</p>
                :
                <div className="currency-basic-details-container-mobile">
                    <img 
                        src={currencyDetails?.logoUrl}
                        alt={`${currencyDetails?.name}-logo`}
                        className="currency-details-logo-mobile"
                    />
                    <h2 className="currency-details-name-mobile">{currencyDetails.name}</h2>
                    <p className="currency-details-symbol-mobile">{currencyDetails.symbol}</p>
                    <p className="currency-details-rank-mobile">{`Rank #${currencyDetails.rank}`}</p>
                </div>
            }
            
        </Mobile>
        <Desktop>
            {
                apiStatus === API_STATUS_CONSTANTS.IN_PROGRESS ? <p>Loading...</p>
                :
                <div className="currency-basic-details-container-desktop">
                    <img 
                        src={currencyDetails?.logoUrl}
                        alt={`${currencyDetails?.name}-logo`}
                        className="currency-details-logo-desktop"
                    />
                    <h2 className="currency-details-name-desktop">{currencyDetails.name}</h2>
                    <p className="currency-details-symbol-desktop">{currencyDetails.symbol}</p>
                    <p className="currency-details-rank-desktop">{`Rank #${currencyDetails.rank}`}</p>
            </div>
            }
        </Desktop>
    </>
  )
}

export default CurrencyBasicDetails