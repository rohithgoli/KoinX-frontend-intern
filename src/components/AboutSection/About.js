import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import AboutHeader from './AboutHeader'
import AboutBody from './AboutBody'
import AboutFooter from './AboutFooter'

const About = () => {
  return (
    <>
        <Mobile>
            <div className="about-section-container-mobile">
                <h2>About Bitcoin</h2>
                <AboutHeader/>
                <AboutBody />
                <AboutFooter/>
            </div>
        </Mobile>
        <Desktop>
            <div className="about-section-container-desktop">
                <h2>About Bitcoin</h2>
                <AboutHeader/>
                <hr className='separator'></hr>
                <AboutBody/>
                <hr className='separator'></hr>
                <AboutFooter/>
                <hr className='separator'></hr>
                <p className="about-section-item-description">
                Etiam tincidunt imperdiet placerat. Etiam ac enim libero. Sed nec ex viverra, tempor metus eu, fermentum orci. Cras mattis leo vel erat viverra, nec sagittis magna posuere. Nunc urna nisi, hendrerit et elementum vel, maximus quis arcu. Donec maximus, arcu molestie bibendum euismod, orci risus lobortis sapien, ut eleifend mi ante vel turpis. Proin nisl magna, condimentum non ex et, rutrum efficitur arcu. Nulla elit ante, efficitur ut nibh vel, rutrum luctus ipsum.
                </p>
            </div>
        </Desktop>
    </>
  )
}

export default About