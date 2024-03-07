import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import PerformanceIndicator from './PerformanceIndicator'

const Performance = () => {
  return (
    <>
        <Mobile>
            <div className="performance-section-container-mobile">
                <h2>Performance</h2>
                <PerformanceIndicator />
            </div>
        </Mobile>
        <Desktop>
            <div className="performance-section-container-desktop">
                <h2>Performance</h2>
                <PerformanceIndicator />
            </div>
        </Desktop>
    </>
  )
}

export default Performance