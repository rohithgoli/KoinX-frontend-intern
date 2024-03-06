import React from 'react'
import { Mobile, Desktop } from '../ScreenView'


const GetStartedSection = () => {
  return (
    <>
        <Mobile>
            <div className="get-started-container-mobile">
                <img
                    src={require("../../../public/get-started-image.png")}
                    alt="get-started-image"
                    className="get-started-image-mobile"
                />
                <h2 className="get-started-heading-mobile">Get Started with KoinX for FREE</h2>
                <p className="get-started-description-mobile">
                    With our range of features that you can equip for
                    free, KoinX allows you to be more educated and 
                    aware of your tax reports.
                </p>
                <button className="get-started-btn-mobile">Get Started for FREE</button>
            </div>
        </Mobile>
        <Desktop>
            <div className="get-started-container-desktop">
                <h2 className="get-started-heading-desktop">Get Started with KoinX for FREE</h2>
                <p className="get-started-description-desktop">
                    With our range of features that you can equip for
                    free, KoinX allows you to be more educated and 
                    aware of your tax reports.
                </p>
                <img
                    src={require("../../../public/get-started-image.png")}
                    alt="get-started-image"
                    className="get-started-image-desktop"
                />
                
                <button className="get-started-btn-desktop">Get Started for FREE</button>
            </div>
        </Desktop>
    </>
  )
}

export default GetStartedSection