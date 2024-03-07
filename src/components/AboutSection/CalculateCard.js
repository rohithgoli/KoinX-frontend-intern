import React from 'react'
import { Mobile, Desktop } from '../ScreenView'

const CalculateCard = ({cardDetails}) => {
    const {cardTitle, cardType} = cardDetails;

    let cardContainerClassName = "";
    switch(cardType) {
        case "PROFIT":
            cardContainerClassName = "profit-card";
            break;
        case "TAX":
            cardContainerClassName = "tax-card";
            break;
        default:
            return "";
    }

  return (
    <>
        <Mobile>
            <div className={`calculation-card-container-mobile ${cardContainerClassName}`}>
                <div className="card-image-container">
                    <img 
                        src={cardType == "PROFIT" ? require("../../../public/calculate-profit.png") : require("../../../public/calculate-tax.png")}
                        alt={`${cardType}-card-image`}
                        className="calculate-card-image"
                    />
                </div>
                <div className="card-details-container">
                    <h2 className="card-title">{cardTitle}</h2>
                    <button className="card-btn">
                        Check Now
                    </button>
                </div>
            </div>
        </Mobile>
        <Desktop>
            <div className={`calculation-card-container-desktop ${cardContainerClassName}`}>
                <div className="card-image-container">
                    <img 
                        src={cardType == "PROFIT" ? require("../../../public/calculate-profit.png") : require("../../../public/calculate-tax.png")}
                        alt={`${cardType}-card-image`}
                        className="calculate-card-image"
                    />
                </div>
                <div className="card-details-container"> 
                    <h2 className="card-title">{cardTitle}</h2>
                    <button className="card-btn">Check Now</button>
                </div>
            </div>
        </Desktop>
    </>
  )
}

export default CalculateCard