import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import { CALCULATE_CARD_DETAILS } from '../../../utils/constants'
import CalculateCard from './CalculateCard'

const AboutFooter = () => {
  return (
    <>
        <Mobile>
            <h2 className="about-footer-section-heading-mobile">Already Holding Crypto?</h2>
            <div className="about-footer-calculate-cards-container-mobile">
                {
                    CALCULATE_CARD_DETAILS.map(cardDetails => 
                        <CalculateCard key={cardDetails?.id} cardDetails={cardDetails} />    
                    )
                }
            </div>
        </Mobile>
        <Desktop>
            <h2 className="about-footer-section-heading-desktop">Already Holding Bitcoin?</h2>
            <div className="about-footer-calculate-cards-container-desktop">
                {
                    CALCULATE_CARD_DETAILS.map(cardDetails =>
                        <CalculateCard key={cardDetails?.id} cardDetails={cardDetails} />
                    )
                }
            </div>
        </Desktop>
    </>
  )
}

export default AboutFooter